(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_bomi_school_2020_1_IoT_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_Users_bomi_school_2020_1_IoT_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_styles_mainColor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_KeyPad__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),_ResultArea__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15);function _templateObject(){var e=Object(_Users_bomi_school_2020_1_IoT_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n    padding: 30px;\n    border-radius: 50px;\n    background-color: white;\n    border-spacing: 0px;\n"]);return _templateObject=function(){return e},e}var Table=styled_components__WEBPACK_IMPORTED_MODULE_3__.b.table(_templateObject()),result=0,numberBuffer="",afterCalc=!1,afterEqual=!1,Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)("0"),_useState2=Object(_Users_bomi_school_2020_1_IoT_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),value=_useState2[0],setValue=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)("0"),_useState4=Object(_Users_bomi_school_2020_1_IoT_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),process=_useState4[0],setProcess=_useState4[1],changeHandler=function changeHandler(btn){if("number"===typeof btn)afterCalc?(afterCalc=!1,numberBuffer=String(btn)):afterEqual?(afterEqual=!1,result="",numberBuffer+=String(btn)):"0"===value||0===btn&&(0===numberBuffer||""===numberBuffer)?numberBuffer=String(btn):numberBuffer+=String(btn),setValue(numberBuffer),setProcess((0===Number(result)?"":result)+numberBuffer);else{switch(btn){case"=":result+=Number(numberBuffer);try{result=eval(result)}catch(e){setValue("error")}numberBuffer="",afterEqual=!0,setValue(result);break;case"AC":result="",numberBuffer="",setValue(0),setProcess(0);break;case"FRONT":numberBuffer>0?(numberBuffer="-"+numberBuffer,setValue(numberBuffer)):numberBuffer<0&&(numberBuffer=numberBuffer.replace("-",""),setValue(numberBuffer));break;case"BACK":numberBuffer&&(numberBuffer=numberBuffer.slice(0,-1),setValue(numberBuffer||0));break;case".":-1===numberBuffer.indexOf(".")&&(numberBuffer+=".",setValue(numberBuffer)),afterCalc=!1;break;default:afterCalc&&(result=result.slice(0,-1)),result+=Number(numberBuffer)?Number(numberBuffer):"",result+=btn,numberBuffer="0",afterCalc=!0}result||Number(numberBuffer)?setProcess((0===Number(result)?"":result)+(0===Number(numberBuffer)?"":numberBuffer)):setProcess(0)}};return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Table,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ResultArea__WEBPACK_IMPORTED_MODULE_6__.a,{value:value,process:process})),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_KeyPad__WEBPACK_IMPORTED_MODULE_5__.a,{changeHandler:changeHandler}))))};__webpack_exports__.a=Calculator},11:function(e,n,t){"use strict";var r=t(1),a=t(0),l=t.n(a),_=t(2),u=t(3);function c(){var e=Object(r.a)(["\n    background-color: ",";\n    color: white;\n"]);return c=function(){return e},e}function o(){var e=Object(r.a)(["\n    background-color: ",";\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n    width: ",";\n    height: 60px;\n    font-size: 22px;\n    text-align: center;\n    color: black;\n    background-color: white;\n    border: white;\n    border-radius: 50px;\n    outline: none;\n    cursor: pointer;\n    &:hover {\n        opacity: 0.7;\n        \n    }\n    &:active {\n        filter: brightness(80%);\n    }\n"]);return i=function(){return e},e}var s=_.b.button(i(),(function(e){return e.double?"122px":"60px"})),m=Object(_.b)(s)(o(),u.b),f=Object(_.b)(s)(c(),u.a);n.a=function(e){return l.a.createElement(a.Fragment,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(m,{onClick:function(){return e.changeHandler("/")}},"/")),l.a.createElement("td",null,l.a.createElement(m,{onClick:function(){return e.changeHandler("*")}},"x")),l.a.createElement("td",null,l.a.createElement(m,{onClick:function(){return e.changeHandler("-")}},"-")),l.a.createElement("td",null,l.a.createElement(m,{onClick:function(){return e.changeHandler("+")}},"+"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(s,{onClick:function(){return e.changeHandler(7)}},"7")),l.a.createElement("td",null,l.a.createElement(s,{onClick:function(){return e.changeHandler(8)}},"8")),l.a.createElement("td",null,l.a.createElement(s,{onClick:function(){return e.changeHandler(9)}},"9")),l.a.createElement("td",null,l.a.createElement(m,{onClick:function(){return e.changeHandler("FRONT")}},"+/-"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(s,{onClick:function(){return e.changeHandler(4)}},"4")),l.a.createElement("td",null,l.a.createElement(s,{onClick:function(){return e.changeHandler(5)}},"5")),l.a.createElement("td",null,l.a.createElement(s,{onClick:function(){return e.changeHandler(6)}},"6")),l.a.createElement("td",null,l.a.createElement(m,{onClick:function(){return e.changeHandler("AC")}},"AC"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(s,{onClick:function(){return e.changeHandler(1)}},"1")),l.a.createElement("td",null,l.a.createElement(s,{onClick:function(){return e.changeHandler(2)}},"2")),l.a.createElement("td",null,l.a.createElement(s,{onClick:function(){return e.changeHandler(3)}},"3")),l.a.createElement("td",null,l.a.createElement(m,{onClick:function(){return e.changeHandler("BACK")}},"\u232b"))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:2},l.a.createElement(s,{double:1,onClick:function(){return e.changeHandler(0)}},"0")),l.a.createElement("td",null,l.a.createElement(s,{onClick:function(){return e.changeHandler(".")}},".")),l.a.createElement("td",null,l.a.createElement(f,{onClick:function(){return e.changeHandler("=")}},"=")))))}},15:function(e,n,t){"use strict";var r=t(1),a=t(0),l=t.n(a),_=t(2),u=t(3);function c(){var e=Object(r.a)(["\n    padding-top: 10px;\n    font-weight: bold;\n    font-size: 30px;\n    color: ",";\n    margin: 0;\n"]);return c=function(){return e},e}function o(){var e=Object(r.a)(["\n    font-size: 15px;\n    background-color: white;\n    color: gray;\n    margin: 0;\n    padding: 5px 10px;\n    text-align: right;\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n    font-size: 25px;\n    color: black;\n    text-align: right;\n    margin: 0;\n    padding: 15px 10px 15px 10px;\n    background-color: white;\n"]);return i=function(){return e},e}var s=_.b.h1(i()),m=_.b.p(o()),f=_.b.p(c(),u.a);n.a=function(e){return l.a.createElement(a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:4},l.a.createElement(f,null,"Calculator"))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:4},l.a.createElement(s,null,e.value))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:4},l.a.createElement(m,null,e.process))))}},16:function(e,n,t){e.exports=t(23)},23:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(9),_=t.n(l),u=t(4),c=t(1),o=t(10),i=t(2),s=t(3);function m(){var e=Object(c.a)(["\n  color: white;\n  margin-top: 230px;\n"]);return m=function(){return e},e}function f(){var e=Object(c.a)(["\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    margin-top: 120px;\n"]);return f=function(){return e},e}function b(){var e=Object(c.a)(["\n  body {\n    padding: 0;\n    margin: 0;\n    background-color: ",";\n    /* height: 100%; */\n  }\n  td {\n      padding: 5px;\n      border: 1px solid white;\n  }\n"]);return b=function(){return e},e}var E=Object(i.a)(b(),s.a),d=i.b.div(f()),p=Object(i.b)(d)(m());var O=function(){var e=Object(r.useState)(!0),n=Object(u.a)(e,2),t=n[0],l=n[1];return Object(r.useEffect)((function(){setTimeout((function(){l(!1)}))}),[]),a.a.createElement("div",{className:"App"},a.a.createElement(E,null),a.a.createElement(d,null,t?a.a.createElement(p,null,a.a.createElement("h1",null,"Loading . . .")):a.a.createElement(o.a,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));_.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r="#151122",a="#EEEEEE"}},[[16,1,2]]]);
//# sourceMappingURL=main.b1e5e078.chunk.js.map