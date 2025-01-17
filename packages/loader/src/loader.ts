Error.stackTraceLimit = Infinity

import {
  TamaguiOptions,
  createExtractor,
  extractToClassNames,
  getPragmaOptions,
  patchReactNativeWeb,
} from '@tamagui/static'

import { extractedInfoByFile, stylePathToFilePath } from './css'

// pass loader as path
const CSS_LOADER_PATH = require.resolve('./css')

Error.stackTraceLimit = Infinity
const extractor = createExtractor()

let index = 0
let hasPatched = false

process.env.TAMAGUI_TARGET = 'web'

export const loader = async function loader(this, sourceIn: Buffer | string) {
  this.cacheable(true)
  const callback = this.async()
  const source = sourceIn.toString()

  if (!process.env.TAMAGUI_DISABLE_RNW_PATCH && !hasPatched) {
    patchReactNativeWeb()
    hasPatched = true
  }

  try {
    const threaded = this.emitFile === undefined
    const options: TamaguiOptions = { ...this.getOptions() }
    const sourcePath = `${this.resourcePath}`
    const { shouldDisable, shouldPrintDebug } = getPragmaOptions({ source, path: sourcePath })

    if (shouldDisable) {
      return callback(null, source)
    }

    const cssPath = threaded ? `${sourcePath}.module.css` : `${sourcePath}.${index++}.module.css`

    const extracted = await extractToClassNames({
      extractor,
      source,
      sourcePath,
      options,
      shouldPrintDebug,
    })

    if (!extracted) {
      return callback(null, source)
    }

    // add import to css
    if (extracted.styles) {
      const cssQuery = threaded
        ? `cssData=${Buffer.from(extracted.styles).toString('base64')}`
        : `cssPath=${cssPath}`
      const remReq = this.remainingRequest
      const importPath = `${cssPath}!=!${CSS_LOADER_PATH}?${cssQuery}!${remReq}`
      extracted.js = `${extracted.js}\n\nrequire(${JSON.stringify(importPath)})`
    }

    extractedInfoByFile.set(sourcePath, extracted)

    if (!threaded) {
      if (extracted.stylesPath) {
        stylePathToFilePath.set(extracted.stylesPath, sourcePath)
      }
    }

    callback(null, extracted.js, extracted.map)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Tamagui Webpack Loader Error', err)
    return this.callback(null, source)
  }
}
