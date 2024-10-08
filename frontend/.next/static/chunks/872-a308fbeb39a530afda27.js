(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{676:function(e,t,r){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}r.d(t,{Z:function(){return o}})},7329:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var o=r(676);var n=r(2961);function i(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,n.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2961:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var o=r(676);function n(e,t){if(e){if("string"===typeof e)return(0,o.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,o.Z)(e,t):void 0}}},4184:function(e,t){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===i)for(var l in r)o.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},7761:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),n=r(7294),i=l(n),s=l(r(600));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scrollListener=r.scrollListener.bind(r),r.eventListenerOptions=r.eventListenerOptions.bind(r),r.mousewheelListener=r.mousewheelListener.bind(r),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(r){}return e}},{key:"eventListenerOptions",value:function(){this.props.useCapture;return this.isPassiveSupported()?{useCapture:this.props.useCapture,passive:!0}:{passive:!1}}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,r=this.getParentElement(e),o=void 0;if(this.props.useWindow){var n=document.documentElement||document.body.parentNode||document.body,i=void 0!==t.pageYOffset?t.pageYOffset:n.scrollTop;o=this.props.isReverse?i:this.calculateOffset(e,i)}else o=this.props.isReverse?r.scrollTop:e.scrollHeight-r.scrollTop-r.clientHeight;o<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=r.scrollHeight,this.beforeScrollTop=r.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),r=t.children,o=t.element,n=t.hasMore,s=(t.initialLoad,t.isReverse),l=t.loader,a=(t.loadMore,t.pageStart,t.ref),u=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));u.ref=function(t){e.scrollComponent=t,a&&a(t)};var p=[r];return n&&(l?s?p.unshift(l):p.push(l):this.defaultLoader&&(s?p.unshift(this.defaultLoader):p.push(this.defaultLoader))),i.default.createElement(o,u,p)}}]),t}(n.Component);a.propTypes={children:s.default.node.isRequired,element:s.default.node,hasMore:s.default.bool,initialLoad:s.default.bool,isReverse:s.default.bool,loader:s.default.node,loadMore:s.default.func.isRequired,pageStart:s.default.number,ref:s.default.func,getScrollParent:s.default.func,threshold:s.default.number,useCapture:s.default.bool,useWindow:s.default.bool},a.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=a,e.exports=t.default},246:function(e,t,r){e.exports=r(7761)},8855:function(e,t,r){"use strict";var o=r(4244);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,s){if(s!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},600:function(e,t,r){e.exports=r(8855)()},4244:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9370:function(e,t,r){"use strict";r.d(t,{df:function(){return h}});var o=r(7294),n=Object.defineProperty,i=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),s=new Map,l=new WeakMap,a=0,u=void 0;function p(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(r=e.root,r?(l.has(r)||(a+=1,l.set(r,a.toString())),l.get(r)):"0"):e[t]}`;var r})).toString()}function c(e,t,r={},o=u){if("undefined"===typeof window.IntersectionObserver&&void 0!==o){const n=e.getBoundingClientRect();return t(o,{isIntersecting:o,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:i,elements:l}=function(e){const t=p(e);let r=s.get(t);if(!r){const o=new Map;let n;const i=new IntersectionObserver((t=>{t.forEach((t=>{var r;const i=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=i),null==(r=o.get(t.target))||r.forEach((e=>{e(i,t)}))}))}),e);n=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:o},s.set(t,r)}return r}(r),a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(l.delete(e),i.unobserve(e)),0===l.size&&(i.disconnect(),s.delete(n))}}var h=class extends o.Component{constructor(e){super(e),i(this,"node",null),i(this,"_unobserveCb",null),i(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),i(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:r,trackVisibility:o,delay:n,fallbackInView:i}=this.props;this._unobserveCb=c(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:o,delay:n},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}const{as:t,triggerOnce:r,threshold:n,root:i,rootMargin:s,onChange:l,skip:a,trackVisibility:u,delay:p,initialInView:c,fallbackInView:h,...d}=this.props;return o.createElement(t||"div",{ref:this.handleNode,...d},e)}}}}]);