(function(n){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],A=0,p=[];A<i.length;A++)o=i[A],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,i=1;i<t.length;i++){var c=t[i];0!==s[c]&&(r=!1)}r&&(a.splice(e--,1),n=o(o.s=t[0]))}return n}var r={},s={app:0},a=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("cd49")},"190e":function(n,e,t){var r=t("2307");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var s=t("35d6").default;n.exports.__inject__=function(n){s("1cb32a38",r,n)}},2307:function(n,e,t){var r=t("24fb");e=r(!0),e.push([n.i,"input[data-v-4897dfa2]{padding:.5rem;background-color:#f3f3f3;border:none}","",{version:3,sources:["/Users/ducanhtrinh/projects/satellite-elements/src/components/BaseInput.vue","/Users/ducanhtrinh/projects/satellite-elements/src/styles/variables.scss"],names:[],mappings:"AAoBA,uBACE,aAAA,CACA,wBCpBW,CDqBX,WAAA",file:"BaseInput.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "../styles/variables.scss";\n\ninput {\n  padding: 0.5rem;\n  background-color: $gray-light;\n  border: none;\n}\n',"// Colors\n$gray: gray;\n$gray-light: #f3f3f3;\n$green-whatsapp: #00c40a;\n\n// Sizes\n$newsletter-content: 576px;\n"]}]),n.exports=e},2590:function(n,e,t){"use strict";t.r(e);var r=t("d70c");for(var s in r)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(s)},4529:function(n,e,t){"use strict";t.r(e);var r=t("190e");for(var s in r)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(s)},"455c":function(n,e,t){var r=t("24fb");e=r(!0),e.push([n.i,".charles-checkbox[data-v-25923627]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left}.charles-checkbox label[data-v-25923627]{cursor:pointer}.charles-checkbox input[type=checkbox][data-v-25923627]{width:24px;height:24px;cursor:pointer;margin-right:8px}","",{version:3,sources:["/Users/ducanhtrinh/projects/satellite-elements/src/components/BaseCheckbox.vue"],names:[],mappings:"AAuBA,mCACE,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,wBAAA,CAAA,qBAAA,CAAA,kBAAA,CACA,eAAA,CAEA,yCACE,cAAA,CAEF,wDACE,UAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA",file:"BaseCheckbox.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.charles-checkbox {\n  display: flex;\n  align-items: center;\n  text-align: left;\n\n  label {\n    cursor: pointer;\n  }\n  input[type="checkbox"] {\n    width: 24px;\n    height: 24px;\n    cursor: pointer;\n    margin-right: 8px;\n  }\n}\n']}]),n.exports=e},"53a6":function(n,e,t){"use strict";t.r(e);var r=t("be6a");for(var s in r)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(s)},"5cc3":function(n,e,t){"use strict";t.r(e);var r=t("ffe6");for(var s in r)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(s)},"6b79":function(n,e,t){var r=t("24fb");e=r(!0),e.push([n.i,"button[data-v-03918bdc]{padding:.5rem;cursor:pointer;background-color:#00c40a;border-radius:1rem;border:none;color:#fff}","",{version:3,sources:["/Users/ducanhtrinh/projects/satellite-elements/src/components/CtaButton.vue","/Users/ducanhtrinh/projects/satellite-elements/src/styles/variables.scss"],names:[],mappings:"AAsBA,wBACE,aAAA,CACA,cAAA,CACA,wBCtBe,CDuBf,kBAAA,CACA,WAAA,CACA,UAAA",file:"CtaButton.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "../styles/variables.scss";\n\nbutton {\n  padding: 0.5rem;\n  cursor: pointer;\n  background-color: $green-whatsapp;\n  border-radius: 1rem;\n  border: none;\n  color: white;\n}\n',"// Colors\n$gray: gray;\n$gray-light: #f3f3f3;\n$green-whatsapp: #00c40a;\n\n// Sizes\n$newsletter-content: 576px;\n"]}]),n.exports=e},"7d1d":function(n,e,t){var r=t("455c");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var s=t("35d6").default;n.exports.__inject__=function(n){s("1a1f25fb",r,n)}},"8ca2":function(n,e,t){var r=t("24fb");e=r(!0),e.push([n.i,"*{font-family:Arial,Helvetica,sans-serif;margin:0}h1{font-size:1rem}p{font-size:.8rem}.charles-newsletter{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.5rem;text-align:center;background-color:#fff}.charles-newsletter h1{font-size:1rem;margin-bottom:8px}.charles-newsletter-form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:576px;padding:3rem;margin:auto}","",{version:3,sources:["/Users/ducanhtrinh/projects/satellite-elements/src/styles/index.scss","/Users/ducanhtrinh/projects/satellite-elements/src/components/NewsletterOptIn.vue","/Users/ducanhtrinh/projects/satellite-elements/src/styles/variables.scss"],names:[],mappings:"AAEA,EACE,sCAAA,CACA,QAAA,CAGF,GACE,cAAA,CAGF,EACE,eAAA,CCwEF,oBACE,yEAAA,CAAA,iEAAA,CACA,mBAAA,CACA,iBAAA,CACA,qBAAA,CAEA,uBACE,cAAA,CACA,iBAAA,CAIJ,yBACE,mBAAA,CAAA,mBAAA,CAAA,YAAA,CACA,2BAAA,CAAA,4BAAA,CAAA,yBAAA,CAAA,qBAAA,CACA,eC7FmB,CD8FnB,YAAA,CACA,WAAA",file:"NewsletterOptIn.vue",sourcesContent:['@import "./variables.scss";\n\n* {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n}\n\nh1 {\n  font-size: 1rem;\n}\n\np {\n  font-size: 0.8rem;\n}\n','\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "../styles/index.scss";\n\n.charles-newsletter {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  border-radius: 0.5rem;\n  text-align: center;\n  background-color: white;\n\n  h1 {\n    font-size: 1rem;\n    margin-bottom: 8px;\n  }\n}\n\n.charles-newsletter-form {\n  display: flex;\n  flex-direction: column;\n  max-width: $newsletter-content;\n  padding: 3rem;\n  margin: auto;\n}\n',"// Colors\n$gray: gray;\n$gray-light: #f3f3f3;\n$green-whatsapp: #00c40a;\n\n// Sizes\n$newsletter-content: 576px;\n"]}]),n.exports=e},ac9d:function(n,e,t){"use strict";t.r(e);var r=t("7d1d");for(var s in r)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(s)},be6a:function(n,e,t){var r=t("6b79");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var s=t("35d6").default;n.exports.__inject__=function(n){s("cd66c31a",r,n)}},cd49:function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("c894"),s=t("a6f4"),a=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"charles-newsletter"},[n.isDone?t("NewsletterOptInSuccess"):t("form",{staticClass:"charles-newsletter-form",on:{submit:function(e){return e.preventDefault(),n.onSubmit.apply(null,arguments)}}},[t("h1",[n._v(n._s(n.heading))]),t("p",[n._v(n._s(n.description))]),t("CInput",{attrs:{type:"text",placeholder:"Your Name"},model:{value:n.name,callback:function(e){n.name=e},expression:"name"}}),t("CInput",{attrs:{type:"tel",placeholder:"Your Phone Number"},model:{value:n.phone,callback:function(e){n.phone=e},expression:"phone"}}),t("CCheckbox",{attrs:{id:"agreed"},model:{value:n.hasAgreed,callback:function(e){n.hasAgreed=e},expression:"hasAgreed"}},[t("p",[n._v(" "+n._s(n.legalText)+" "),t("a",{attrs:{href:n.privacyPolicyLink,target:"_blank"}},[n._v("Link")])])]),t("CtaButton",{attrs:{type:"submit"}},[n._v(n._s(n.ctaButtonLabel))])],1)],1)},i=[],c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("button",{attrs:{type:n.type}},[n._t("default")],2)},l=[],u=Object(s["b"])({props:{type:{type:String,default:"button"}}}),A=u,p=t("2877");function d(n){var e=t("53a6");e.__inject__&&e.__inject__(n)}var f=Object(p["a"])(A,c,l,!1,d,"03918bdc",null,!0),h=f.exports,m=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("input",{attrs:{type:n.type}})},b=[],C=Object(s["b"])({props:{type:{type:String,default:"text"}}}),v=C;function g(n){var e=t("4529");e.__inject__&&e.__inject__(n)}var x=Object(p["a"])(v,m,b,!1,g,"4897dfa2",null,!0),_=x.exports,y=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"charles-checkbox"},[t("input",{attrs:{id:n.id,type:"checkbox"}}),t("label",{attrs:{for:n.id}},[n._t("default")],2)])},w=[],B=Object(s["b"])({props:{id:{type:String,required:!0}}}),j=B;function k(n){var e=t("ac9d");e.__inject__&&e.__inject__(n)}var O=Object(p["a"])(j,y,w,!1,k,"25923627",null,!0),E=O.exports,$=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},S=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"charles-newsletter-done"},[t("div",{staticClass:"content"},[t("h1",[n._v(" Thanks a lot! 🥳 ")]),t("p",[n._v(" We have successfully opted-in to stay in touch with us on WhatsApp. We're excited to have you! ")])])])}],I={};function z(n){var e=t("5cc3");e.__inject__&&e.__inject__(n)}var q=Object(p["a"])(I,$,S,!1,z,"352763de",null,!0),U=q.exports,D=Object(s["b"])({components:{CtaButton:h,CInput:_,CCheckbox:E,NewsletterOptInSuccess:U},props:{heading:{type:String,default:"Get our Whatsapp Newsletter"},description:{type:String,default:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid repellat quisquam non molestiae, unde libero cupiditate quia"},legalText:{type:String,default:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid repellat quisquam non molestiae, unde libero cupiditate quia"},privacyPolicyLink:{type:String,default:"https://hello-charles.com"},ctaButtonLabel:{type:String,default:"Submit"}},setup:function(){var n=Object(s["c"])(""),e=Object(s["c"])(""),t=Object(s["c"])(!1),r=Object(s["c"])(!1),a=function(){r.value=!0};return{phone:n,name:e,hasAgreed:t,onSubmit:a,isDone:r}}}),N=D;function P(n){var e=t("2590");e.__inject__&&e.__inject__(n)}var W=Object(p["a"])(N,o,i,!1,P,null,null,!0),M=W.exports;a["default"].config.productionTip=!1,a["default"].use(s["a"]),a["default"].use(r["a"]);var F={shadow:!0,beforeCreateVueInstance:function(n){var e,t,r=null===(e=(t=n.el).getRootNode)||void 0===e?void 0:e.call(t);return r instanceof ShadowRoot?n.shadowRoot=r:n.shadowRoot=document.head,n},shadowCss:"\n    :host {\n      width: 100%;\n      height: 100%;\n    }\n  "};a["default"].customElement("charles-newsletter",M,F)},d70c:function(n,e,t){var r=t("8ca2");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var s=t("35d6").default;n.exports.__inject__=function(n){s("de255d44",r,n)}},e42f:function(n,e,t){var r=t("24fb");e=r(!0),e.push([n.i,".charles-newsletter-done[data-v-352763de]{background-color:#00c40a;color:#fff;padding:2rem}.charles-newsletter-done h1[data-v-352763de]{font-size:3rem}.charles-newsletter-done p[data-v-352763de]{font-size:1rem}.charles-newsletter-done .content[data-v-352763de]{max-width:576px;margin:auto}","",{version:3,sources:["/Users/ducanhtrinh/projects/satellite-elements/src/components/NewsletterOptInSuccess.vue","/Users/ducanhtrinh/projects/satellite-elements/src/styles/variables.scss"],names:[],mappings:"AAmBA,0CACE,wBCjBe,CDkBf,UAAA,CACA,YAAA,CAEA,6CACE,cAAA,CAEF,4CACE,cAAA,CAGF,mDACE,eC1BiB,CD2BjB,WAAA",file:"NewsletterOptInSuccess.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "../styles/variables.scss";\n\n.charles-newsletter-done {\n  background-color: $green-whatsapp;\n  color: white;\n  padding: 2rem;\n\n  h1 {\n    font-size: 3rem;\n  }\n  p {\n    font-size: 1rem;\n  }\n\n  .content {\n    max-width: $newsletter-content;\n    margin: auto;\n  }\n}\n',"// Colors\n$gray: gray;\n$gray-light: #f3f3f3;\n$green-whatsapp: #00c40a;\n\n// Sizes\n$newsletter-content: 576px;\n"]}]),n.exports=e},ffe6:function(n,e,t){var r=t("e42f");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var s=t("35d6").default;n.exports.__inject__=function(n){s("24158a1a",r,n)}}});
//# sourceMappingURL=app.7c50760d.js.map