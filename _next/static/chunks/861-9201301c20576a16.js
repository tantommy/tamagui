(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{62103:function(e,t,r){"use strict";r.r(t)},1993:function(e,t,r){"use strict";r.r(t)},55181:function(e,t,r){"use strict";r.r(t)},46518:function(e,t,r){"use strict";r.d(t,{M:function(){return h}});var o=r(52322),n=r(2784),i=r(54503);var s=r(90243);const c=(0,n.createContext)({});var a=r(57263),l=r(12496),u=r(63358);const d=e=>{let{children:t,initial:r,isPresent:i,onExitComplete:s,exitVariant:c,enterVariant:d,presenceAffectsLayout:f}=e;const h=(0,a.h)(p),m=(0,l.M)()||"",b=n.useMemo((()=>({id:m,initial:r,isPresent:i,exitVariant:c,enterVariant:d,onExitComplete:e=>{h.set(e,!0);for(const t of h.values())if(!t)return;null==s||s()},register:e=>(h.set(e,!1),()=>h.delete(e))})),f?void 0:[i,c,d]);return n.useMemo((()=>{h.forEach(((e,t)=>h.set(t,!1)))}),[i]),n.useEffect((()=>{!i&&!h.size&&(null==s||s())}),[i]),(0,o.jsx)(u.O.Provider,{value:b,children:t})};function p(){return new Map}n.keep;const f=e=>e.key||"";const h=e=>{let{children:t,enterVariant:r,exitVariant:a,initial:l=!0,onExitComplete:u,exitBeforeEnter:p,presenceAffectsLayout:h=!0}=e,m=(0,s.N)();const b=(0,n.useContext)(c).forceRender;b&&(m=b);const v=function(){const e=(0,n.useRef)(!1);return(0,i.LI)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}(),g=function(e){const t=[];return n.Children.forEach(e,((e,r)=>{(0,n.isValidElement)(e)&&(e.key?t.push(e):t.push(n.cloneElement(e,{key:r})))})),t}(t);let y=g;const x=new Set,k=(0,n.useRef)(y),w=(0,n.useRef)(new Map).current,C=(0,n.useRef)(!0);var P;if((0,i.LI)((()=>{C.current=!1,function(e,t){e.forEach((e=>{const r=f(e);t.set(r,e)}))}(g,w),k.current=y})),P=()=>{C.current=!0,w.clear(),x.clear()},(0,n.useEffect)((()=>()=>P()),[]),C.current)return(0,o.jsx)(o.Fragment,{children:y.map((e=>(0,o.jsx)(d,{isPresent:!0,exitVariant:a,enterVariant:r,initial:!!l&&void 0,presenceAffectsLayout:h,children:e},f(e))))});y=[...y];const j=k.current.map(f),E=g.map(f),_=j.length;for(let o=0;o<_;o++){const e=j[o];-1===E.indexOf(e)&&x.add(e)}return p&&x.size&&(y=[]),x.forEach((e=>{if(-1!==E.indexOf(e))return;const t=w.get(e);if(!t)return;const n=j.indexOf(e);y.splice(n,0,(0,o.jsx)(d,{isPresent:!1,onExitComplete:()=>{w.delete(e),x.delete(e);const t=k.current.findIndex((t=>t.key===e));if(k.current.splice(t,1),!x.size){if(k.current=g,!1===v.current)return;m(),null==u||u()}},exitVariant:a,enterVariant:r,presenceAffectsLayout:h,children:t},f(t)))})),y=y.map((e=>{const t=e.key;return x.has(t)?e:(0,o.jsx)(d,{isPresent:!0,exitVariant:a,enterVariant:r,presenceAffectsLayout:h,children:e},f(e))})),(0,o.jsx)(o.Fragment,{children:x.size?y:y.map((e=>(0,n.cloneElement)(e)))})};h.displayName="AnimatePresence"},80832:function(e,t,r){"use strict";r.d(t,{R:function(){return o.R}});var o=r(49732)},5146:function(e,t,r){"use strict";r.d(t,{zx:function(){return w}});var o=r(37328),n=r(96670),i=r(26297),s=r(52322),c=r(45482),a=r(37314),l=r(25622),u=r(59699),d=r(9058),p=r(63035),f=r(38129),h=r(49957),m=r(39383),b=r(29694),v=r(41977),g=r(2784);g.createElement;const y=(0,c.z)(m.K,{name:"Button",tag:"button",focusable:!0,hoverTheme:!0,pressTheme:!0,backgrounded:!0,variants:{size:{"...size":a.a},active:{true:{hoverStyle:{backgroundColor:"$background"}}},disabled:{true:{opacity:.5,pointerEvents:"none"}}},defaultVariants:{size:"$4"},"borderTopColor-focus":"_btc-0focus-1b0a2ef","borderRightColor-focus":"_brc-0focus-1b0a2ef","borderBottomColor-focus":"_bbc-0focus-1b0a2ef","borderLeftColor-focus":"_blc-0focus-1b0a2ef","borderTopColor-hover":"_btc-0hover-16hdpw2","borderRightColor-hover":"_brc-0hover-16hdpw2","borderBottomColor-hover":"_bbc-0hover-16hdpw2","borderLeftColor-hover":"_blc-0hover-16hdpw2","borderTopColor-active":"_btc-0active-16hdpw2","borderRightColor-active":"_brc-0active-16hdpw2","borderBottomColor-active":"_bbc-0active-16hdpw2","borderLeftColor-active":"_blc-0active-16hdpw2",cursor:"_cur-1seloot",flexDirection:"_fd-2fa2",flexWrap:"_fw-1hu5zm3",alignItems:"_ai-1ch0i1h",justifyContent:"_jc-1ch0i1h",borderTopColor:"_btc-16hdpw2",borderRightColor:"_brc-16hdpw2",borderBottomColor:"_bbc-16hdpw2",borderLeftColor:"_blc-16hdpw2",borderTopWidth:"_btw-133t",borderRightWidth:"_brw-133t",borderBottomWidth:"_bbw-133t",borderLeftWidth:"_blw-133t",borderBottomStyle:"_bbs-1t9igb",borderTopStyle:"_bts-1t9igb",borderLeftStyle:"_bls-1t9igb",borderRightStyle:"_brs-1t9igb"}),x=(0,c.z)(b.J,{selectable:!1,ellipse:!0,flexShrink:"_fs-1",flexGrow:"_fg-0",cursor:"_cur-w76juj",color:"_col-b5vn3b"}),k=(0,g.forwardRef)(((e,t)=>{const{children:r,icon:c,iconAfter:a,noTextWrap:p,theme:m,space:b,spaceFlex:k,scaleIcon:w=1,scaleSpace:C=.66,separator:P,color:j,fontWeight:E,letterSpacing:_,fontSize:O,fontFamily:R,textAlign:Z,textProps:z}=e,L=(0,i.Z)(e,["children","icon","iconAfter","noTextWrap","theme","space","spaceFlex","scaleIcon","scaleSpace","separator","color","fontWeight","letterSpacing","fontSize","fontFamily","textAlign","textProps"]),S=(0,g.useContext)(l.K),A=e.size||"$4",F=("number"===typeof A?.5*A:(0,f.yv)(A))*w,$=(0,h.useGetThemedIcon)({size:F,color:j}),[T,W]=[c,a].map($),N=(0,u.Ve)(F)*C,I=(0,v.k)(x,e);return(0,s.jsx)(y,(0,n.Z)((0,o.Z)((0,n.Z)((0,o.Z)({fontFamily:R},S&&{tag:"span"}),{ref:t}),L),{children:(0,s.jsx)(l.K.Provider,{value:!0,children:T||W?(0,d.P9)({space:N,spaceFlex:k,separator:P,direction:"column"===e.flexDirection||"column-reverse"===e.flexDirection?"vertical":"horizontal",children:[T,I,W]}):I})}))})),w=y.extractable((0,p.Y)(k),{inlineProps:new Set(["color","fontWeight","fontSize","fontFamily","letterSpacing","textAlign"])});r(62103)},8005:function(e,t,r){"use strict";r.d(t,{b:function(){return l},k:function(){return a}});var o=r(37328),n=r(96670),i=r(26297),s=r(52322),c=r(2784);function a(e,t){const r=c.createContext(t);function o(e){const{children:t}=e,o=(0,i.Z)(e,["children"]),n=c.useMemo((()=>o),Object.values(o));return(0,s.jsx)(r.Provider,{value:n,children:t})}return o.displayName=e+"Provider",[o,function(o){const n=c.useContext(r);if(n)return n;if(void 0!==t)return t;throw new Error("`".concat(o,"` must be used within `").concat(e,"`"))}]}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];function a(t,o){const n=c.createContext(o),a=r.length;function l(t){const{scope:r,children:o}=t,l=(0,i.Z)(t,["scope","children"]),u=(null==r?void 0:r[e][a])||n,d=c.useMemo((()=>l),Object.values(l));return(0,s.jsx)(u.Provider,{value:d,children:o})}return r=[...r,o],l.displayName=t+"Provider",[l,function(r,i){const s=(null==i?void 0:i[e][a])||n,l=c.useContext(s);if(l)return l;if(void 0!==o)return o;throw new Error("`".concat(r,"` must be used within `").concat(t,"`"))}]}const l=()=>{const t=r.map((e=>c.createContext(e)));return function(r){const i=(null==r?void 0:r[e])||t;return c.useMemo((()=>({["__scope".concat(e)]:(0,n.Z)((0,o.Z)({},r),{[e]:i})})),[r,i])}};return l.scopeName=e,[a,u(l,...t)]}function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const n=t[0];if(1===t.length)return n;const i=()=>{const e=t.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(t){const r=e.reduce(((e,r)=>{let{useScope:n,scopeName:i}=r;const s=n(t)["__scope".concat(i)];return(0,o.Z)({},e,s)}),{});return c.useMemo((()=>({["__scope".concat(n.scopeName)]:r})),[r])}};return i.scopeName=n.scopeName,i}},70628:function(e,t,r){"use strict";r.d(t,{M:function(){return p}});var o=r(37328),n=r(96670),i=r(26297),s=r(88290),c=r(43798),a=r(2784);const l="focusScope.autoFocusOnMount",u="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},p=a.forwardRef(((e,t)=>{const{loop:r=!1,trapped:p=!1,onMountAutoFocus:m,onUnmountAutoFocus:b}=e,y=(0,i.Z)(e,["loop","trapped","onMountAutoFocus","onUnmountAutoFocus"]),[x,k]=a.useState(null),w=(0,c.z)(m),C=(0,c.z)(b),P=a.useRef(null),j=(0,s.e)(t,(e=>k(e))),E=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect((()=>{if(p){let e=function(e){if(E.paused||!x)return;const t=e.target;x.contains(t)?P.current=t:v(P.current,{select:!0})},t=function(e){!E.paused&&x&&(x.contains(e.relatedTarget)||v(P.current,{select:!0}))};return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}}),[p,x,E.paused]),a.useEffect((()=>{if(x){g.add(E);const t=document.activeElement;if(!x.contains(t)){const r=new CustomEvent(l,d);x.addEventListener(l,w),x.dispatchEvent(r),r.defaultPrevented||(!function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=document.activeElement;for(const o of e)if(v(o,{select:t}),document.activeElement!==r)return}((e=f(x),e.filter((e=>"A"!==e.tagName))),{select:!0}),document.activeElement===t&&v(x))}return()=>{x.removeEventListener(l,w),setTimeout((()=>{const e=new CustomEvent(u,d);x.addEventListener(u,C),x.dispatchEvent(e),e.defaultPrevented||v(null!=t?t:document.body,{select:!0}),x.removeEventListener(u,C),g.remove(E)}),0)}}var e}),[x,w,C,E]);const _=a.useCallback((e=>{if(!r&&!p)return;if(E.paused)return;const t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){const t=e.currentTarget,[n,i]=function(e){const t=f(e),r=h(t,e),o=h(t.reverse(),e);return[r,o]}(t);n&&i?e.shiftKey||o!==i?e.shiftKey&&o===n&&(e.preventDefault(),r&&v(i,{select:!0})):(e.preventDefault(),r&&v(n,{select:!0})):o===t&&e.preventDefault()}}),[r,p,E.paused]),O=a.Children.only(e.children);return a.cloneElement(O,(0,n.Z)((0,o.Z)({tabIndex:-1},y),{ref:j,onKeyDown:_}))}));function f(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function h(e,t){for(const r of e)if(!m(r,{upTo:t}))return r}function m(e,t){let{upTo:r}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(void 0!==r&&e===r)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function b(e){return e instanceof HTMLInputElement&&"select"in e}function v(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){const r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&b(e)&&t&&e.select()}}p.displayName="FocusScope";const g=function(){let e=[];return{add(t){const r=e[0];t!==r&&(null==r||r.pause()),e=y(e,t),e.unshift(t)},remove(t){var r;e=y(e,t),null==(r=e[0])||r.resume()}}}();function y(e,t){const r=[...e],o=r.indexOf(t);return-1!==o&&r.splice(o,1),r}},38129:function(e,t,r){"use strict";r.d(t,{yv:function(){return i}});var o=r(59699),n=r(77650);const i=(e,t)=>{const r=s(e,t);return(0,o.cG)(r)?+r.val:r?+r:16},s=(e,t)=>{const r=c(e,t);if(!r)return e;return(0,n.iE)().fontsParsed[(null==t?void 0:t.font)||"$body"].size[r]},c=(e,t)=>{var r;if("number"===typeof e)return null;const o=e||"$4",i=(null==t?void 0:t.relativeSize)||0,s=(0,n.iE)().fontsParsed[(null==t?void 0:t.font)||"$body"].size,c=Object.keys(s);let a=c.indexOf(o);-1===a&&o.endsWith(".5")&&(a=c.indexOf(o.replace(".5","")));return null!=(r=c[Math.min(Math.max(0,a+i),c.length-1)])?r:o}},49957:function(e,t,r){"use strict";r.d(t,{useGetThemedIcon:function(){return c}});var o=r(37328),n=r(96670),i=r(2784),s=r(61958);const c=e=>{const t=(e=>{const t=(0,s.Fg)();let r;return r=t&&e&&e in t?t[e]:e||(null==t?void 0:t.color),(null==r?void 0:r.toString())||""})(e.color);return r=>r?(0,i.isValidElement)(r)?i.cloneElement(r,(0,o.Z)((0,n.Z)((0,o.Z)({},e),{color:t}),r.props)):i.createElement(r,(0,n.Z)((0,o.Z)({},e),{color:t})):r}},32577:function(e,t,r){"use strict";r.d(t,{J2:function(){return H},QH:function(){return M},bh:function(){return O},s2:function(){return z},tW:function(){return S},xo:function(){return F},yk:function(){return T}});var o=r(37328),n=r(96670),i=r(26297),s=r(52322),c=(r(99021),r(98333)),a=r(46518),l=r(80832),u=r(88290),d=r(11193),p=r(61958),f=r(36475),h=r(82735),m=r(12496),b=r(8005),v=r(70628),g=r(6621),y=r(12938),x=r(2940),k=r(18217),w=r(35314),C=r(47138),P=r(2784);const j="Popover",[E,_]=(0,b.b)(j,[g.D7]),O=(0,g.D7)(),[R,Z]=E(j),z=R,L="PopoverAnchor",S=P.forwardRef(((e,t)=>{const{__scopePopover:r}=e,c=(0,i.Z)(e,["__scopePopover"]),a=Z(L,r),l=O(r),{onCustomAnchorAdd:u,onCustomAnchorRemove:d}=a;return P.useEffect((()=>(u(),()=>d())),[u,d]),(0,s.jsx)(g.Xp,(0,n.Z)((0,o.Z)({},l,c),{ref:t}))}));S.displayName=L;const A="PopoverTrigger",F=P.forwardRef(((e,t)=>{const{__scopePopover:r}=e,c=(0,i.Z)(e,["__scopePopover"]),a=Z(A,r),l=O(r),p=(0,u.e)(t,a.triggerRef),f=(0,s.jsx)(w.FA,(0,n.Z)((0,o.Z)({"aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":D(a.open)},c),{ref:p,onPress:(0,d.composeEventHandlers)(e.onPress,a.onOpenToggle)}));return a.hasCustomAnchor?f:(0,s.jsx)(g.Xp,(0,n.Z)((0,o.Z)({asChild:!0},l),{children:f}))}));F.displayName=A;const $="PopoverContent",T=P.forwardRef(((e,t)=>{const{allowPinchZoom:r,trapFocus:c,disableRemoveScroll:a}=e,h=(0,i.Z)(e,["allowPinchZoom","trapFocus","disableRemoveScroll"]),m=Z($,e.__scopePopover),b=P.useRef(null),v=(0,u.e)(t,b),g=P.useRef(!1),y=(0,p.Cg)();return P.useEffect((()=>{if(!m.open)return;const e=b.current;return e?(0,l.R)(e):void 0}),[m.open]),(0,s.jsx)(x.h_,{children:(0,s.jsx)(f.Q,{name:y,children:(0,s.jsx)(k.Z,{enabled:!a&&m.open,allowPinchZoom:r,children:(0,s.jsx)(W,(0,n.Z)((0,o.Z)({},h),{ref:v,trapFocus:null!=c?c:m.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,d.composeEventHandlers)(e.onCloseAutoFocus,(e=>{var t;e.preventDefault(),g.current||null==(t=m.triggerRef.current)||t.focus()})),onPointerDownOutside:(0,d.composeEventHandlers)(e.onPointerDownOutside,(e=>{const t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey,o=2===t.button||r;g.current=o}),{checkDefaultPrevented:!1}),onFocusOutside:(0,d.composeEventHandlers)(e.onFocusOutside,(e=>e.preventDefault()),{checkDefaultPrevented:!1})}))})})})})),W=P.forwardRef(((e,t)=>{const{__scopePopover:r,trapFocus:c,onOpenAutoFocus:l,onCloseAutoFocus:u,disableOutsidePointerEvents:d,onEscapeKeyDown:p,onPointerDownOutside:f,onFocusOutside:h,onInteractOutside:m,children:b}=e,y=(0,i.Z)(e,["__scopePopover","trapFocus","onOpenAutoFocus","onCloseAutoFocus","disableOutsidePointerEvents","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","children"]),x=O(r),k=Z($,x.__scopePopover);return(0,s.jsx)(a.M,{children:!!k.open&&(0,s.jsx)(g.XS,(0,n.Z)((0,o.Z)({"data-state":D(k.open),id:k.contentId,pointerEvents:"auto"},x,y),{ref:t,children:!1===c?b:(0,s.jsx)(v.M,{loop:!0,trapped:null!=c?c:k.open,onMountAutoFocus:l,onUnmountAutoFocus:u,children:(0,s.jsx)("div",{style:{display:"contents"},children:b})})}),"popper-content")})})),N="PopoverClose",I=P.forwardRef(((e,t)=>{const{__scopePopover:r}=e,c=(0,i.Z)(e,["__scopePopover"]),a=Z(N,r);return(0,s.jsx)(w.FA,(0,n.Z)((0,o.Z)({},c),{ref:t,onPress:(0,d.composeEventHandlers)(e.onPress,(()=>a.onOpenChange(!1)))}))}));I.displayName=N;const M=P.forwardRef(((e,t)=>{const{__scopePopover:r}=e,c=(0,i.Z)(e,["__scopePopover"]),a=O(r);return(0,s.jsx)(g.cU,(0,n.Z)((0,o.Z)({},a,c),{ref:t}))}));M.displayName="PopoverArrow";const H=(0,h.$)((e=>{const{__scopePopover:t,children:r,open:a,defaultOpen:l,onOpenChange:u}=e,d=(0,i.Z)(e,["__scopePopover","children","open","defaultOpen","onOpenChange"]),p=O(t),f=P.useRef(null),[h,b]=P.useState(!1),[v,x]=(0,C.T)({prop:a,defaultProp:l||!1,onChange:u}),k=P.useCallback((e=>{const t=(0,c.YF)((0,n.Z)((0,o.Z)({},e),{open:v,onOpenChange:x})),{getReferenceProps:r,getFloatingProps:i}=(0,c.NI)([(0,c.KK)(t.context),(0,c.qs)(t.context,{role:"dialog"}),(0,c.bQ)(t.context)]);return(0,n.Z)((0,o.Z)({},t),{getReferenceProps:r,getFloatingProps:i})}),[v,x]);return(0,s.jsx)(y.A.Provider,{value:k,children:(0,s.jsx)(g.rD,(0,n.Z)((0,o.Z)({},p,d),{children:(0,s.jsx)(R,{scope:t,contentId:(0,m.M)(),triggerRef:f,open:v,onOpenChange:x,onOpenToggle:P.useCallback((()=>x((e=>!e))),[x]),hasCustomAnchor:h,onCustomAnchorAdd:P.useCallback((()=>b(!0)),[]),onCustomAnchorRemove:P.useCallback((()=>b(!1)),[]),children:r})}))})}),{Anchor:S,Arrow:M,Trigger:F,Content:T,Close:I});function D(e){return e?"open":"closed"}H.displayName=j},6621:function(e,t,r){"use strict";r.d(t,{D7:function(){return P},GK:function(){return E},XS:function(){return L},Xp:function(){return R},cU:function(){return $},rD:function(){return _}});var o=r(37328),n=r(96670),i=r(26297),s=r(52322),c=r(88290),a=r(54503),l=r(45482),u=r(77650),d=r(59699),p=r(9303),f=r(8005),h=r(35314),m=r(39383),b=r(2784),v=r(20189),g=r(66379),y=r(40771),x=r(12938);const k="Popper",[w,C]=(0,f.b)(k),P=C,[j,E]=w(k),_=e=>{const{__scopePopper:t,children:r,size:i,strategy:l="absolute",placement:u="bottom",stayInFrame:d,allowFlip:p}=e,[f,h]=b.useState(!1);(0,a.LI)((()=>{h(!0)}),[]);const m=b.useRef(),[k,w]=b.useState(null),[C,P]=b.useState(0),E=b.useRef(),_=(0,x.Y)({strategy:l,placement:u,middleware:[d?(0,v.uY)(d):null,p?(0,v.RR)(p):null,k?(0,g.x7)({element:k}):null,C?(0,v.cv)(C):null].filter(Boolean)}),{refs:O,middlewareData:R}=_,Z=(0,c.e)(E,w);(0,a.LI)((()=>{_.reference(m.current)}),[m]),b.useEffect((()=>{if(O.reference.current&&O.floating.current)return(0,y.Me)(O.reference.current,O.floating.current,_.update)}),[O.floating.current,O.reference.current]);const z=b.useMemo((()=>R.arrow),[JSON.stringify(R.arrow||{})]);return(0,s.jsx)(j,(0,n.Z)((0,o.Z)({scope:t,anchorRef:m,size:i,arrowRef:Z,arrowStyle:z,onArrowSize:P,isMounted:f},_),{children:r}))};_.displayName=k;const O="PopperAnchor",R=b.forwardRef(((e,t)=>{const{__scopePopper:r,virtualRef:n}=e,a=(0,i.Z)(e,["__scopePopper","virtualRef"]),{anchorRef:l,getReferenceProps:u}=E(O,r),d=b.useRef(null),p=(0,c.e)(t,d,l);if(n)return null;const f=(0,o.Z)({ref:p},a);return(0,s.jsx)(h.FA,(0,o.Z)({},u?u(f):f))}));R.displayName=O;const Z="PopperContent",z=(0,l.z)(m.K,{name:"PopperContent",backgroundColor:"$background",alignItems:"center",radiused:!0,variants:{size:{"...size":(e,t)=>{let{tokens:r}=t;return{padding:r.space[e],borderRadius:r.radius[e]}}}},defaultVariants:{size:"$4"}}),L=z.extractable(b.forwardRef(((e,t)=>{const{__scopePopper:r}=e,a=(0,i.Z)(e,["__scopePopper"]),{strategy:l,placement:u,floating:d,x:p,y:f,getFloatingProps:m,size:v,isMounted:g}=E(Z,r),y=(0,c.e)(d,t),x=b.useMemo((()=>(0,s.jsx)(z,(0,n.Z)((0,o.Z)({"data-placement":u,"data-strategy":l},a),{size:a.size||v}),"popper-content-frame")),[u,l,e]);if(!g)return null;const k={ref:y,x:p||0,y:f||0,position:l};return(0,s.jsx)(h.FA,(0,n.Z)((0,o.Z)({},m?m(k):k),{children:x}))})));L.displayName=Z;const S="PopperArrow",A=(0,l.z)(h.FA,{name:"PopperArrow",borderColor:"$borderColor",backgroundColor:"$background",position:"absolute",zIndex:-1,pointerEvents:"none"}),F={top:"bottom",right:"left",bottom:"top",left:"right"},$=A.extractable(b.forwardRef((function(e,t){const{__scopePopper:r,offset:l,size:f,borderWidth:h=0}=e,m=(0,i.Z)(e,["__scopePopper","offset","size","borderWidth"]),b=E(S,r),v=(0,u.lz)(),g=null!=f?f:b.size,y=+(0,d.Ve)((0,p.C)(v.space,g,-2,[2])),{placement:x}=b,{x:k,y:w}=b.arrowStyle||{x:0,y:0},C=(0,c.e)(b.arrowRef,t),P=x?x.split("-")[0]:"top",j={x:k,y:w,width:y,height:y};if(P){const e=F[P];e&&(j[e]=-y/2),"top"!==e&&"bottom"!==e||(j.left=0),"left"!==e&&"right"!==e||(j.top=0)}return(0,a.LI)((()=>{var e;null==(e=b.onArrowSize)||e.call(b,y)}),[y,b.onArrowSize]),(0,s.jsx)(A,(0,o.Z)((0,n.Z)((0,o.Z)((0,n.Z)((0,o.Z)({},m),{ref:C}),j),{rotate:"45deg"}),"top"===P&&{borderBottomWidth:h,borderRightWidth:h},"bottom"===P&&{borderTopWidth:h,borderLeftWidth:h},"left"===P&&{borderTopWidth:h,borderRightWidth:h},"right"===P&&{borderBottomWidth:h,borderLeftWidth:h}))})));$.displayName=S},12938:function(e,t,r){"use strict";r.d(t,{A:function(){return i},Y:function(){return s}});var o=r(2784),n=r(66379);const i=(0,o.createContext)(null),s=e=>{var t;return null==(t=(0,o.useContext)(i)||n.YF)?void 0:t(e)}},539:function(e,t,r){"use strict";r.d(t,{b:function(){return s}});var o=r(45482),n=r(39383),i=r(53167);const s=(0,o.z)(n.K,{name:"Square",backgrounded:!0,variants:{circular:{true:{borderRadius:1e5}},size:{"...size":i.k}},justifyContent:"_jc-1ch0i1h",alignItems:"_ai-1ch0i1h"});r(1993)},53167:function(e,t,r){"use strict";r.d(t,{k:function(){return o}});const o=(e,t)=>{let{tokens:r}=t;var o,n;const i=null!=(o=r.size[e])?o:e,s=null!=(n=r.size[e])?n:e;return{width:i,height:s,minWidth:i,maxWidth:i,maxHeight:s,minHeight:s}}},87831:function(e,t,r){"use strict";r.d(t,{H:function(){return a}});var o=r(26297),n=r(52322),i=r(97729),s=r.n(i),c=r(5632);r(2784);function a(e){var{url:t="https://tamagui.dev",pathname:r,title:i="Tamagui",description:a="",poster:l}=e,u=(0,o.Z)(e,["url","pathname","title","description","poster"]);const d=(0,c.useRouter)();var p;const f=null!==(p=u.image)&&void 0!==p?p:l?"".concat(t,"/").concat(l):"".concat(t,"/social.png"),h=r||d.pathname;return(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(t).concat(h)}),(0,n.jsx)("meta",{property:"og:title",content:i}),(0,n.jsx)("meta",{property:"og:description",content:a}),(0,n.jsx)("meta",{property:"og:image",content:f}),(0,n.jsx)("meta",{name:"twitter:site",content:"@tamagui_js"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},39383:function(e,t,r){"use strict";r.d(t,{K:function(){return c}});var o=r(45482),n=r(35314),i=r(37328);const s={true:(e,t)=>(0,n.yQ)(t.props.size,t)},c=(0,o.z)(n.FA,{name:"SizableStack",variants:{fontFamily:()=>({}),backgrounded:{true:{backgroundColor:"$background"}},radiused:{true:(e,t)=>{const{tokens:r,props:o}=t;return{borderRadius:r.radius[o.size]||r.radius.$4}}},hoverTheme:{true:{hoverStyle:{backgroundColor:"$backgroundHover",borderColor:"$borderColorHover"}},false:{}},pressTheme:{true:{pressStyle:{backgroundColor:"$backgroundPress",borderColor:"$borderColorPress"}},false:{}},focusTheme:{true:{focusStyle:{backgroundColor:"$backgroundFocus",borderColor:"$borderColorFocus"}},false:{}},circular:{true:(e,t)=>{let{props:r,tokens:o}=t;const n=o.size[r.size];return{width:n,height:n,maxWidth:n,maxHeight:n,minWidth:n,minHeight:n,borderRadius:1e5,paddingVertical:0,paddingHorizontal:0}}},padded:{true:(e,t)=>{const{tokens:r,props:o}=t;return{padding:r.space[o.size]||r.space.$4}}},elevate:s,bordered:(e,t)=>{let{props:r}=t;return(0,i.Z)({borderWidth:"number"===typeof e?e:1,borderColor:"$borderColor"},r.hoverTheme&&{hoverStyle:{borderColor:"$borderColorHover"}},r.pressTheme&&{pressStyle:{borderColor:"$borderColorPress"}},r.focusTheme&&{focusStyle:{borderColor:"$borderColorFocus"}})},transparent:{true:{backgroundColor:"transparent"}},chromeless:{true:{backgroundColor:"transparent",borderColor:"transparent",shadowColor:"transparent"}}}})},46318:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var o=r(37328),n=r(96670),i=r(26297),s=r(52322),c=r(45482),a=r(61125),l=r(59699),u=r(77650),d=r(9058),p=r(80641),f=r(39383),h=r(2784),m=r(30976);const b=(0,c.z)(f.K,{name:"GroupFrame",variants:{size:(e,t)=>{let{tokens:r}=t;var o,n;return{borderRadius:null!=(n=null!=(o=r.radius[e])?o:e)?n:r.radius.$4}}},defaultVariants:{size:"$4"},overflowX:"_ovx-1ew92ne",overflowY:"_ovy-1ew92ne",backgroundColor:"_bc-180kg62",transform:"_transform-19qlv72"}),v=b.extractable((0,h.forwardRef)(((e,t)=>{const r=(0,a.p)(e),{children:c,space:p,spaceDirection:f,separator:v,size:y="$4",scrollable:x,vertical:k,disabled:w,disablePassBorderRadius:C,disablePassSize:P,borderRadius:j}=r,E=(0,i.Z)(r,["children","space","spaceDirection","separator","size","scrollable","vertical","disabled","disablePassBorderRadius","disablePassSize","borderRadius"]),_=null!=j?j:y?(0,l.Ve)((0,u.lz)().radius[y])-1:void 0,O=void 0!==_,R=null!=C?C:!O,Z=h.Children.toArray(c),z=null!=P?P:void 0===y,L=Z.map(((e,t)=>{var r,n;if(!(0,h.isValidElement)(e))return e;const i=null!=(r=e.props.disabled)?r:w,s=null!=(n=e.props.size)?n:y,c=0===t,a=t===Z.length-1,l=(0,o.Z)({disabled:i},!z&&{size:s},!R&&(0,o.Z)({borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0},O&&(0,o.Z)({},c&&!k&&{borderTopLeftRadius:_,borderBottomLeftRadius:_},c&&k&&{borderTopLeftRadius:_,borderTopRightRadius:_},a&&!k&&{borderTopRightRadius:_,borderBottomRightRadius:_},a&&k&&{borderBottomLeftRadius:_,borderBottomRightRadius:_})));return g(e,l)}));return(0,s.jsx)(b,(0,n.Z)((0,o.Z)({ref:t,size:y,flexDirection:k?"column":"row",borderRadius:j},E),{children:(S=(0,d.P9)({direction:f,separator:v,space:p,children:L}),x?(0,s.jsx)(m.ScrollView,(0,n.Z)((0,o.Z)({},k&&{showsVerticalScrollIndicator:!1},!k&&{horizontal:!0,showsHorizontalScrollIndicator:!1}),{children:S})):S)}));var S}))),g=(e,t)=>{const r=(0,p.d)(e.props,t)[0];return h.cloneElement((0,n.Z)((0,o.Z)({},e),{props:null}),r)};r(55181)},41977:function(e,t,r){"use strict";r.d(t,{k:function(){return c}});var o=r(37328),n=r(96670),i=r(52322),s=r(2784);function c(e,t){let{children:r,textProps:c,size:a,noTextWrap:l,color:u,fontFamily:d,fontSize:p,fontWeight:f,letterSpacing:h,textAlign:m}=t;if(l||!r)return r;let b=s.Children.toArray(r),v=[],g=!1;const y={};function x(){if(!g)return;const t=v.length-1,r=v[t];v[t]=(0,i.jsx)(e,(0,n.Z)((0,o.Z)((0,n.Z)((0,o.Z)({},y),{size:a}),c),{children:r}),t)}u&&(y.color=u),d&&(y.fontFamily=d),p&&(y.fontSize=p),f&&(y.fontWeight=f),h&&(y.letterSpacing=h),m&&(y.textAlign=m);for(const o of b){const e=v[v.length-1],t="string"===typeof o;t?g?e.push(o):v.push([o]):(x(),v.push(o)),g=t}return x(),v}},34989:function(e,t,r){"use strict";r.d(t,{AZ:function(){return g},u:function(){return y},w6:function(){return x}});var o=r(37328),n=r(96670),i=r(26297),s=r(52322),c=(r(99021),r(98333)),a=r(82735),l=r(43798),u=r(12496),d=r(32577),p=r(6621),f=r(12938),h=r(61342),m=r(2784);const b=m.forwardRef(((e,t)=>{var{__scopePopover:r}=e,n=(0,i.Z)(e,["__scopePopover"]);const c=(0,d.bh)(r),a=(0,p.GK)("PopperContent",c.__scopePopper);return(0,s.jsx)(d.yk,(0,o.Z)({disableRemoveScroll:!0,trapFocus:!1,padding:n.size||a.size||"$2",componentName:"TooltipContent",pointerEvents:"none",ref:t},n))})),v=m.forwardRef(((e,t)=>(0,s.jsx)(d.QH,(0,o.Z)({componentName:"TooltipArrow",ref:t},e)))),g=c.e0,y=(0,a.$)((e=>{const{__scopePopover:t,children:r,restMs:a=500,delay:h,onOpenChange:b}=e,v=(0,i.Z)(e,["__scopePopover","children","restMs","delay","onOpenChange"]),g=(0,d.bh)(t),y=m.useRef(null),[x,k]=m.useState(!1),{delay:w,setCurrentId:C}=(0,c.tj)(),P=null!=h?h:w,[j,E]=m.useState(!1),_=e.groupId,O=(0,l.z)((e=>{E(e),e&&C(_),null==b||b(e)})),R=m.useCallback((e=>{const t=(0,c.YF)((0,n.Z)((0,o.Z)({},e),{open:j,onOpenChange:O})),{getReferenceProps:r,getFloatingProps:i}=(0,c.NI)([(0,c.XI)(t.context,{delay:P,restMs:a}),(0,c.KK)(t.context),(0,c.qs)(t.context,{role:"tooltip"}),(0,c.bQ)(t.context),(0,c.Qu)(t.context,{id:_})]);return(0,n.Z)((0,o.Z)({},t),{getReferenceProps:r,getFloatingProps:i})}),[_,P,j]),Z=m.useCallback((()=>{}),[E]);return(0,s.jsx)(f.A.Provider,{value:R,children:(0,s.jsx)(p.rD,(0,n.Z)((0,o.Z)({size:"$2"},g,v),{children:(0,s.jsx)(d.s2,{scope:t,contentId:(0,u.M)(),triggerRef:y,open:j,onOpenChange:E,onOpenToggle:Z,hasCustomAnchor:x,onCustomAnchorAdd:m.useCallback((()=>k(!0)),[]),onCustomAnchorRemove:m.useCallback((()=>k(!1)),[]),children:r})}))})}),{Anchor:d.tW,Arrow:v,Content:b,Trigger:d.xo});y.displayName="Tooltip";const x=e=>{var{label:t,children:r,contentProps:a}=e,l=(0,i.Z)(e,["label","children","contentProps"]);let u;try{u=(0,c.tj)()}catch(p){}const d=(0,s.jsxs)(y,(0,n.Z)((0,o.Z)({},l),{children:[(0,s.jsx)(y.Trigger,{asChild:!0,children:r}),(0,s.jsxs)(y.Content,(0,n.Z)((0,o.Z)({enterStyle:{x:0,y:-10,opacity:0,scale:.9},exitStyle:{x:0,y:-10,opacity:0,scale:.9},x:0,scale:1,y:0,elevation:"$1",opacity:1,animation:["bouncy",{opacity:{overshootClamping:!0}}]},a),{children:[(0,s.jsx)(y.Arrow,{}),(0,s.jsx)(h.n,{size:"$2",lineHeight:"$1",children:t})]}))]}));return u?d:(0,s.jsx)(g,{delay:{open:3e3,close:100},children:d})}},47138:function(e,t,r){"use strict";r.d(t,{T:function(){return i}});var o=r(43798),n=r(2784);function i(e){let{prop:t,defaultProp:r,onChange:i,strategy:c="prop-wins",preventUpdate:a}=e;const l=(0,n.useRef)(t),{0:u,1:d}=(0,n.useState)(null!=t?t:r),p="prop-wins"===c;return l.current===t||a||(l.current=t,d((e=>s(e,t,i)))),[u,(0,o.z)((e=>{a||(p&&void 0!==l.current?null==i||i(e):d((t=>s(t,"function"===typeof e?e(t):e,i))))}))]}const s=(e,t,r)=>e===t||void 0===t?e:(null==r||r(t),t)},43798:function(e,t,r){"use strict";r.d(t,{z:function(){return s},X:function(){return i}});var o=r(2784);const n=o.useLayoutEffect;function i(e,t,r){const i=(0,o.useRef)(null!=t?t:e);return n((()=>{i.current=e})),(0,o.useCallback)(r?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o;return null==(o=i.current)?void 0:o.apply(null,t)}:()=>i.current,[])}function s(e){return i(e,c,!0)}const c=()=>{throw new Error("Cannot call an event handler while rendering.")}},61125:function(e,t,r){"use strict";r.d(t,{p:function(){return n}});var o=r(77650);function n(e){const t=(0,o.iE)().shorthands;if(!t)return e;let r={};for(const o in e)r[t[o]||o]=e[o];return r}},9303:function(e,t,r){"use strict";r.d(t,{C:function(){return i},a:function(){return n}});var o=r(77650);const n=(e,t=0,r=[0])=>i((0,o.lz)().size,e,t,r),i=(e,t,r=0,o=[0])=>{const n=Object.keys(e),i=`$${+(("string"===typeof t?t.replace("$",""):t)||"4")+r}`,s=o[0]??0,c=o[1]??n.length-1,a=Math.min(c,Math.max(s,n.indexOf(i)));return e[n[a]]||e.$4}},37314:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});var o=r(9303);const n=(e,{tokens:t})=>{if("number"===typeof e)return{paddingHorizontal:.25*e,height:e,borderRadius:.2*e};const r=(0,o.a)(e,0);return{paddingHorizontal:(0,o.C)(t.space,e),height:r,borderRadius:t.radius[e]??t.radius.$4}}},63035:function(e,t,r){"use strict";r.d(t,{Y:function(){return f}});var o=r(2784),n=r(36475),i=r(83715),s=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function f(e,t){const r=(0,o.forwardRef)((function(r,s){const f=r,{themeInverse:h,theme:m}=f,b=((e,t)=>{var r={};for(var o in e)u.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&d.call(e,o)&&(r[o]=e[o]);return r})(f,["themeInverse","theme"]),v=o.createElement(e,(g=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&p(e,r,t[r]);return e})({},b),c(g,a({ref:s}))));var g;return h?o.createElement(i.f,null,v):m||t?o.createElement(n.Q,{componentName:null==t?void 0:t.componentName,name:m||null},v):v}));return r.displayName=`Themed(${(null==e?void 0:e.displayName)||(null==e?void 0:e.name)||"Anonymous"})`,r}},82735:function(e,t,r){"use strict";r.d(t,{$:function(){return o}});const o=function(e,t){return Object.assign(e,t),e}},11193:function(e,t,r){"use strict";r.d(t,{composeEventHandlers:function(){return n.composeEventHandlers}});var o=r(8135);r.o(o,"composeEventHandlers")&&r.d(t,{composeEventHandlers:function(){return o.composeEventHandlers}});r(36567),r(90243),r(43798);var n=r(29688)},8135:function(){},83715:function(e,t,r){"use strict";r.d(t,{f:function(){return a}});var o=r(2784),n=r(54503),i=r(61958),s=r(36475);let c={light:"dark",dark:"light"};const a=e=>{const t=(0,i.Cg)(),r=(0,i.YC)(),[a,l]=(0,o.useState)(null);return(0,n.LI)((()=>{l(c[t]||c[r||""]||null)}),[r,t]),o.createElement(s.Q,{name:a},e.children)}},2655:function(e,t,r){"use strict";r.d(t,{u:function(){return p}});var o=r(2784),n=r(70810),i=r(74479),s=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>{const t=e,{color:r="black",size:i=24}=t,s=((e,t)=>{var r={};for(var o in e)a.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&l.call(e,o)&&(r[o]=e[o]);return r})(t,["color","size"]);return o.createElement(n.ny,((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&u(e,r,t[r]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement(n.UL,{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"8",y1:"21",x2:"16",y2:"21",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"12",y1:"17",x2:"12",y2:"21",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="Monitor";const p=(0,o.memo)((0,i.H)(d))},75200:function(e,t,r){"use strict";r.d(t,{J:function(){return p}});var o=r(2784),n=r(70810),i=r(74479),s=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>{const t=e,{color:r="black",size:i=24}=t,s=((e,t)=>{var r={};for(var o in e)a.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&l.call(e,o)&&(r[o]=e[o]);return r})(t,["color","size"]);return o.createElement(n.ny,((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&u(e,r,t[r]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement(n.y$,{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="Moon";const p=(0,o.memo)((0,i.H)(d))},91977:function(e,t,r){"use strict";r.d(t,{o:function(){return p}});var o=r(2784),n=r(70810),i=r(74479),s=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>{const t=e,{color:r="black",size:i=24}=t,s=((e,t)=>{var r={};for(var o in e)a.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&l.call(e,o)&&(r[o]=e[o]);return r})(t,["color","size"]);return o.createElement(n.ny,((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&u(e,r,t[r]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement(n.Cd,{cx:"11",cy:"11",r:"8",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"21",y1:"21",x2:"16.65",y2:"16.65",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="Search";const p=(0,o.memo)((0,i.H)(d))},79733:function(e,t,r){"use strict";r.d(t,{k:function(){return p}});var o=r(2784),n=r(70810),i=r(74479),s=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>{const t=e,{color:r="black",size:i=24}=t,s=((e,t)=>{var r={};for(var o in e)a.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&l.call(e,o)&&(r[o]=e[o]);return r})(t,["color","size"]);return o.createElement(n.ny,((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&u(e,r,t[r]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement(n.Cd,{cx:"12",cy:"12",r:"5",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"12",y1:"1",x2:"12",y2:"3",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"12",y1:"21",x2:"12",y2:"23",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"1",y1:"12",x2:"3",y2:"12",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"21",y1:"12",x2:"23",y2:"12",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="Sun";const p=(0,o.memo)((0,i.H)(d))},68110:function(e,t,r){"use strict";r.d(t,{V:function(){return p}});var o=r(2784),n=r(70810),i=r(74479),s=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const d=e=>{const t=e,{color:r="black",size:i=24}=t,s=((e,t)=>{var r={};for(var o in e)a.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&l.call(e,o)&&(r[o]=e[o]);return r})(t,["color","size"]);return o.createElement(n.ny,((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&u(e,r,t[r]);return e})({width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement(n.y$,{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.x1,{x1:"7",y1:"7",x2:"7.01",y2:"7",fill:"none",stroke:`${r}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};d.displayName="Tag";const p=(0,o.memo)((0,i.H)(d))},74479:function(e,t,r){"use strict";r.d(t,{H:function(){return p}});var o=r(61958),n=r(2784),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p(e){return t=>{const r=(0,o.Fg)(),i=t.color||(t.disableTheme?null:r.color)||"#000";return n.createElement(e,(p=((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(a)for(var r of a(t))u.call(t,r)&&d(e,r,t[r]);return e})({},t),s(p,c({color:i}))));var p}}}}]);