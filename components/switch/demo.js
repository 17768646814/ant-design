webpackJsonp([32,197],{95:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(7),p=t(e),o=a(8),c=t(o),l=a(4),u=t(l),i=a(6),k=t(i),r=a(5),d=t(r),h=a(1),f=t(h),g=a(143),m=t(g),C=a(3),w=t(C),y=function(n){function s(){return(0,u["default"])(this,s),(0,k["default"])(this,n.apply(this,arguments))}return(0,d["default"])(s,n),s.prototype.render=function(){var n,s=this.props,a=s.prefixCls,t=s.size,e=s.className,o=(0,w["default"])((n={},(0,c["default"])(n,e,!!e),(0,c["default"])(n,a+"-small","small"===t),n));return f["default"].createElement(m["default"],(0,p["default"])({},this.props,{className:o}))},s}(f["default"].Component);s["default"]=y,y.defaultProps={prefixCls:"ant-switch",size:"default"},y.propTypes={prefixCls:h.PropTypes.string,size:h.PropTypes.oneOf(["small","default"]),className:h.PropTypes.string},n.exports=s["default"]},96:function(n,s,a){"use strict";a(11),a(138)},138:function(n,s){},142:function(n,s,a){"use strict";function t(n,s){var a={};for(var t in n)s.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a}function e(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}function p(){}var o=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},c=a(1),l=a(3),u=c.createClass({displayName:"Switch",propTypes:{className:c.PropTypes.string,prefixCls:c.PropTypes.string,disabled:c.PropTypes.bool,checkedChildren:c.PropTypes.any,unCheckedChildren:c.PropTypes.any,onChange:c.PropTypes.func,onMouseUp:c.PropTypes.func},getDefaultProps:function(){return{prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1,onChange:p}},getInitialState:function(){var n=this.props,s=!1;return s="checked"in n?!!n.checked:!!n.defaultChecked,{checked:s}},componentWillReceiveProps:function(n){"checked"in n&&this.setState({checked:!!n.checked})},setChecked:function(n){"checked"in this.props||this.setState({checked:n}),this.props.onChange(n)},toggle:function(){var n=!this.state.checked;this.setChecked(n)},handleKeyDown:function(n){37===n.keyCode&&this.setChecked(!1),39===n.keyCode&&this.setChecked(!0)},handleMouseUp:function(n){this.refs.node&&this.refs.node.blur(),this.props.onMouseUp&&this.props.onMouseUp(n)},render:function(){var n,s=this.props,a=s.className,u=s.prefixCls,i=s.disabled,k=s.checkedChildren,r=s.unCheckedChildren,d=t(s,["className","prefixCls","disabled","checkedChildren","unCheckedChildren"]),h=this.state.checked,f=l((n={},e(n,a,!!a),e(n,u,!0),e(n,u+"-checked",h),e(n,u+"-disabled",i),n));return c.createElement("span",o({},d,{className:f,tabIndex:"0",ref:"node",onKeyDown:this.handleKeyDown,onClick:i?p:this.toggle,onMouseUp:this.handleMouseUp}),c.createElement("span",{className:u+"-inner"},h?k:r))}});n.exports=u},143:function(n,s,a){"use strict";n.exports=a(142)},777:function(n,s,a){n.exports={basic:a(1679),disabled:a(1680),size:a(1681),text:a(1682)}},1679:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(96),a(95)),p=t(e),o=a(1),c=t(o),l=a(2);t(l);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/switch/demo/basic.md",id:"components-switch-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Switch <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>checked<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`switch to </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>checked<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >defaultChecked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("switch to "+n)}return c["default"].createElement(p["default"],{defaultChecked:!1,onChange:n})},style:"\n.ant-switch {\n  margin-bottom: 8px;\n  display: block;\n}\n<style>"}},1680:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(14),a(13)),p=t(e),o=(a(96),a(95)),c=t(o),l=a(1),u=t(l),i=a(2);t(i);n.exports={content:{"zh-CN":[["p","Switch \u5931\u6548\u72b6\u6001\u3002"]],"en-US":[["p","Disabled state of ",["code","Switch"],"."]]},meta:{order:1,title:{"zh-CN":"\u4e0d\u53ef\u7528","en-US":"Disabled"},filename:"components/switch/demo/disabled.md",id:"components-switch-demo-disabled"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Switch<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggle</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >disabled</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>disabled<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggle<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Toggle disabled<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"Test",getInitialState:function(){return{disabled:!0}},toggle:function(){this.setState({disabled:!this.state.disabled})},render:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{disabled:this.state.disabled}),u["default"].createElement(p["default"],{type:"primary",onClick:this.toggle},"Toggle disabled"))}});return u["default"].createElement(n,null)}}},1681:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(96),a(95)),p=t(e),o=a(1),c=t(o),l=a(2);t(l);n.exports={content:{"zh-CN":[["p",["code",'size="small"']," \u8868\u793a\u5c0f\u53f7\u5f00\u5173\u3002"]],"en-US":[["p",["code",'size="small"']," represents a small sized switch."]]},meta:{order:3,title:{"zh-CN":"\u4e24\u79cd\u5927\u5c0f","en-US":"Two sizes"},filename:"components/switch/demo/size.md",id:"components-switch-demo-size"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Switch <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],null),c["default"].createElement(p["default"],{size:"small"}))}}},1682:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(17),a(12)),p=t(e),o=(a(96),a(95)),c=t(o),l=a(1),u=t(l),i=a(2);t(i);n.exports={content:{"zh-CN":[["p","\u5e26\u6709\u6587\u5b57\u548c\u56fe\u6807\u3002"]],"en-US":[["p","With text and icon."]]},meta:{order:2,title:{"zh-CN":"\u6587\u5b57\u548c\u56fe\u6807","en-US":"Text & icon"},filename:"components/switch/demo/text.md",id:"components-switch-demo-text"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Switch<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checkedChildren</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'\u5f00\'</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >unCheckedChildren</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'\u5173\'</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checkedChildren</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span> <span class="token attr-name" >unCheckedChildren</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checkedChildren={&lt;Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>check<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span> unCheckedChildren<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>cross<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{checkedChildren:"\u5f00",unCheckedChildren:"\u5173"}),u["default"].createElement(c["default"],{checkedChildren:"1",unCheckedChildren:"0"}),u["default"].createElement(c["default"],{checkedChildren:u["default"].createElement(p["default"],{type:"check"}),unCheckedChildren:u["default"].createElement(p["default"],{type:"cross"})}))}}}});