"use strict";(self.webpackChunkkalbo_adventures=self.webpackChunkkalbo_adventures||[]).push([[912],{5921:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var r=[{id:1,title:"Our Team",body:"We have a team of youthful,experienced professionals and creative individuals. The team ensures that you enjoy your stay by connecting with you, creating adventure happiness and exceeding both yours and our expectations."},{id:2,title:"Book With Confidence, Travel with Confidence",body:"Unsure about travelling now or in the near future? We have a flexible and risk-free booking policy, which also allows you to pay for your trip in installments."},{id:3,title:"Sustainable Travel",body:"At Kalbo Adventures we value responsible travel and are committed to exploring the world consciously and kindly. We are proud to make responsible travel possible with a number of our sustainable travel practices."},{id:4,title:"Why Kalbo Adventures?",body:" We design customized trips in Kenya and East Africa based on your budget. Whether you are on a high or low budget, we have something for you.The tours we offer are the most affordable and hassle-free way to travel."},{id:5,title:"The Kalbo Adventures Story",body:"Kalbo adventures was started by an individual who has a passion in Adventure and exploring. We have been conducting group tour travel adventures since 2020 with the goal of providing fun, affordable and convenient, once-in-a-lifetime travel."},{id:6,title:"Testimonials",body:"We welcome travelers from all over the world. Whether you're a solo traveller, family, couple or friends travelling together; group travel is the way to go! See first-hand feedback from clients who have travelled with us."},{id:7,title:"Why Choose Group Travel",body:"Group travel is one of the best ways to see the world. Not only is it a great way to meet new people from different backgrounds, it offers amazing value thanks to all of the travel details being taken care of by our team. All you need to do is hop on the coach and be ready to explore!"}],a=t(1413),o=t(5987),i=t(1694),s=t.n(i),l=t(2791),c=t(239),u=t(162),d=t(4942),f=t(5427),h=t(322),v=t(1380);var m,p=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];e.apply(this,r),n.apply(this,r)}}),null)},y=t(7202),b=t(4083),x=t(184),g=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],w={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function N(e,n){var t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],r=w[e];return t+parseInt((0,f.Z)(n,r[0]),10)+parseInt((0,f.Z)(n,r[1]),10)}var j=(m={},(0,d.Z)(m,h.Wj,"collapse"),(0,d.Z)(m,h.Ix,"collapsing"),(0,d.Z)(m,h.d0,"collapsing"),(0,d.Z)(m,h.cn,"collapse show"),m),Z={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:N},E=l.forwardRef((function(e,n){var t=e.onEnter,r=e.onEntering,i=e.onEntered,c=e.onExit,u=e.onExiting,d=e.className,f=e.children,h=e.dimension,m=void 0===h?"height":h,w=e.getDimensionValue,Z=void 0===w?N:w,E=(0,o.Z)(e,g),A="function"===typeof m?m():m,C=(0,l.useMemo)((function(){return p((function(e){e.style[A]="0"}),t)}),[A,t]),k=(0,l.useMemo)((function(){return p((function(e){var n="scroll".concat(A[0].toUpperCase()).concat(A.slice(1));e.style[A]="".concat(e[n],"px")}),r)}),[A,r]),K=(0,l.useMemo)((function(){return p((function(e){e.style[A]=null}),i)}),[A,i]),S=(0,l.useMemo)((function(){return p((function(e){e.style[A]="".concat(Z(A,e),"px"),(0,y.Z)(e)}),c)}),[c,Z,A]),P=(0,l.useMemo)((function(){return p((function(e){e.style[A]=null}),u)}),[A,u]);return(0,x.jsx)(b.Z,(0,a.Z)((0,a.Z)({ref:n,addEndListener:v.Z},E),{},{"aria-expanded":E.role?E.in:null,onEnter:C,onEntering:k,onEntered:K,onExit:S,onExiting:P,childRef:f.ref,children:function(e,n){return l.cloneElement(f,(0,a.Z)((0,a.Z)({},n),{},{className:s()(d,f.props.className,j[e],"width"===A&&"collapse-horizontal")}))}}))}));E.defaultProps=Z;var A=E;function C(e,n){return Array.isArray(e)?e.includes(n):e===n}var k=l.createContext({});k.displayName="AccordionContext";var K=k,S=["as","bsPrefix","className","children","eventKey"],P=l.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,i=e.bsPrefix,c=e.className,d=e.children,f=e.eventKey,h=(0,o.Z)(e,S),v=(0,l.useContext)(K).activeEventKey;return i=(0,u.vE)(i,"accordion-collapse"),(0,x.jsx)(A,(0,a.Z)((0,a.Z)({ref:n,in:C(v,f)},h),{},{className:s()(c,i),children:(0,x.jsx)(r,{children:l.Children.only(d)})}))}));P.displayName="AccordionCollapse";var W=P,_=l.createContext({eventKey:""});_.displayName="AccordionItemContext";var T=_,I=["as","bsPrefix","className"],O=l.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,i=e.bsPrefix,c=e.className,d=(0,o.Z)(e,I);i=(0,u.vE)(i,"accordion-body");var f=(0,l.useContext)(T).eventKey;return(0,x.jsx)(W,{eventKey:f,children:(0,x.jsx)(r,(0,a.Z)((0,a.Z)({ref:n},d),{},{className:s()(c,i)}))})}));O.displayName="AccordionBody";var R=O,M=t(2982),B=["as","bsPrefix","className","onClick"];var D=l.forwardRef((function(e,n){var t=e.as,r=void 0===t?"button":t,i=e.bsPrefix,c=e.className,d=e.onClick,f=(0,o.Z)(e,B);i=(0,u.vE)(i,"accordion-button");var h=(0,l.useContext)(T).eventKey,v=function(e,n){var t=(0,l.useContext)(K),r=t.activeEventKey,a=t.onSelect,o=t.alwaysOpen;return function(t){var i=e===r?null:e;o&&(i=Array.isArray(r)?r.includes(e)?r.filter((function(n){return n!==e})):[].concat((0,M.Z)(r),[e]):[e]),null==a||a(i,t),null==n||n(t)}}(h,d),m=(0,l.useContext)(K).activeEventKey;return"button"===r&&(f.type="button"),(0,x.jsx)(r,(0,a.Z)((0,a.Z)({ref:n,onClick:v},f),{},{"aria-expanded":h===m,className:s()(c,i,!C(m,h)&&"collapsed")}))}));D.displayName="AccordionButton";var z=D,U=["as","bsPrefix","className","children","onClick"],F=l.forwardRef((function(e,n){var t=e.as,r=void 0===t?"h2":t,i=e.bsPrefix,l=e.className,c=e.children,d=e.onClick,f=(0,o.Z)(e,U);return i=(0,u.vE)(i,"accordion-header"),(0,x.jsx)(r,(0,a.Z)((0,a.Z)({ref:n},f),{},{className:s()(l,i),children:(0,x.jsx)(z,{onClick:d,children:c})}))}));F.displayName="AccordionHeader";var H=F,V=["as","bsPrefix","className","eventKey"],G=l.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,i=e.bsPrefix,c=e.className,d=e.eventKey,f=(0,o.Z)(e,V);i=(0,u.vE)(i,"accordion-item");var h=(0,l.useMemo)((function(){return{eventKey:d}}),[d]);return(0,x.jsx)(T.Provider,{value:h,children:(0,x.jsx)(r,(0,a.Z)((0,a.Z)({ref:n},f),{},{className:s()(c,i)}))})}));G.displayName="AccordionItem";var L=G,q=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],J=l.forwardRef((function(e,n){var t=(0,c.Ch)(e,{activeKey:"onSelect"}),r=t.as,i=void 0===r?"div":r,d=t.activeKey,f=t.bsPrefix,h=t.className,v=t.onSelect,m=t.flush,p=t.alwaysOpen,y=(0,o.Z)(t,q),b=(0,u.vE)(f,"accordion"),g=(0,l.useMemo)((function(){return{activeEventKey:d,onSelect:v,alwaysOpen:p}}),[d,v,p]);return(0,x.jsx)(K.Provider,{value:g,children:(0,x.jsx)(i,(0,a.Z)((0,a.Z)({ref:n},y),{},{className:s()(h,b,m&&"".concat(b,"-flush"))}))})}));J.displayName="Accordion";var Q=Object.assign(J,{Button:z,Collapse:W,Item:L,Header:H,Body:R}),X=function(){return(0,x.jsxs)("div",{className:"mb-4",children:[(0,x.jsx)("h1",{className:"h-4 headers",children:"Read More"}),r.map((function(e){var n=e.id,t=e.title,r=e.body;return(0,x.jsx)(Q,{flush:!0,children:(0,x.jsxs)(Q.Item,{eventKey:n,children:[(0,x.jsx)(Q.Header,{children:(0,x.jsx)("h4",{children:t})}),(0,x.jsx)(Q.Body,{children:(0,x.jsx)("p",{children:r})})]})},n)}))]})};function Y(){return(0,x.jsx)("section",{className:"breadcrumbs-custom-inset",children:(0,x.jsxs)("div",{className:"breadcrumbs-custom context-dark bg-overlay-60",children:[(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("h2",{className:"breadcrumbs-custom-title",children:"About"}),(0,x.jsxs)("ul",{className:"breadcrumbs-custom-path",children:[(0,x.jsx)("li",{children:(0,x.jsx)("a",{href:"/kalbo-main",children:"Home"})}),(0,x.jsx)("li",{className:"active",children:"About"})]})]}),(0,x.jsx)("div",{className:"box-position"})]})})}var $=function(){return(0,x.jsxs)("div",{className:"about-page container mt-0",children:[(0,x.jsx)(Y,{}),(0,x.jsx)("h1",{className:"h-2 headers",children:"About"}),(0,x.jsxs)("div",{className:"about",children:[(0,x.jsx)("p",{className:"mt-2",children:"We are a Tours and Travel Company based in Nairobi Kenya whose main interest is to change the face of travel in Africa by creating an authentic sustainable travel experience like the world has never experienced before. We design customized trips in Kenya and East Africa at large. Whether you are on a high or a low budget,we will work within your budget to give you a quality luxury time."}),(0,x.jsx)("p",{className:"mt-2",children:"Our trips include Beach tours, Camping, Mountain climbing, park drives, Zip-lining and cycling tours that take in awe-inspiring scenery and breath-taking wildlife encounters."}),(0,x.jsx)("p",{className:"mt-2",children:"We have adventure holidays designed specifically for Families, mixed activity holidays and seasonal getaways, perfect for those interested in private tours."}),(0,x.jsx)("p",{className:"mt-2",children:"We have unforgettable experiences in our top destinations. A journey of discovery with Kalbo Adventures is just some of the memories waiting to be made."}),(0,x.jsx)("p",{className:"mt-2",children:"We also have a collection of holidays for 30s to 40s to help busy professionals maximize their annual leave.  Join us now for the adventure holiday of a life time."})]}),(0,x.jsx)(X,{})]})}},2176:function(e){e.exports=function(e,n,t,r,a,o,i,s){if(!e){var l;if(void 0===n)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,r,a,o,i,s],u=0;(l=new Error(n.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},239:function(e,n,t){t.d(n,{Ch:function(){return l}});var r=t(7462),a=t(3366),o=t(2791);t(2176);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function l(e,n){return Object.keys(n).reduce((function(t,l){var c,u=t,d=u[i(l)],f=u[l],h=(0,a.Z)(u,[i(l),l].map(s)),v=n[l],m=function(e,n,t){var r=(0,o.useRef)(void 0!==e),a=(0,o.useState)(n),i=a[0],s=a[1],l=void 0!==e,c=r.current;return r.current=l,!l&&c&&i!==n&&s(n),[l?e:i,(0,o.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];t&&t.apply(void 0,[e].concat(r)),s(e)}),[t])]}(f,d,e[v]),p=m[0],y=m[1];return(0,r.Z)({},h,((c={})[l]=p,c[v]=y,c))}),e)}function c(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function u(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function d(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}c.__suppressDeprecationWarning=!0,u.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0},9611:function(e,n,t){function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}t.d(n,{Z:function(){return r}})},2982:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(907);var a=t(181);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=912.27cc8dc9.chunk.js.map