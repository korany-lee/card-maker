(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{10:function(e,a,t){e.exports={mediaQuery:"62rem",makerWhite:"white",makerBlack:"black",form:"card_add_form_form__1mJeN",input:"card_add_form_input__1s9KG",textarea:"card_add_form_textarea__3OTfu",select:"card_add_form_select__2br_K",button:"card_add_form_button__3PkX4",fileInput:"card_add_form_fileInput__R7REj"}},14:function(e,a,t){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",makerBlack:"black",login:"login_login__19aQM",list:"login_list__17HtO",item:"login_item__3A1Lj",button:"login_button__Fi6x4"}},15:function(e,a,t){e.exports={makerLightGrey:"#e8e7e6",makerLightPink:"#ffeae8",makerPink:"pink",container:"image_file_input_container__3Eqtx",input:"image_file_input_input__1K4NM",button:"image_file_input_button__3E8sw",pink:"image_file_input_pink__1V0O7",grey:"image_file_input_grey__68AiQ",loading:"image_file_input_loading__3OwEa",spin:"image_file_input_spin__1K71y"}},22:function(e,a,t){e.exports={makerGreen:"#385461",makerWhite:"white",makerBlack:"black",header:"header_header__v9FKw",logo:"header_logo__1X7aW",title:"header_title__1DXxp",logout:"header_logout__1MXam"}},28:function(e,a,t){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerPink:"pink",makerWhite:"white",makerBlack:"black",preview:"preview_preview__3lr-V",title:"preview_title__3zLS1",cards:"preview_cards__1KzyC"}},30:function(e,a,t){e.exports={makerGreen:"#385461",makerWhite:"white",footer:"footer_footer__1lZIc",title:"footer_title__pkoUs"}},34:function(e,a,t){e.exports={makerGreen:"#385461",makerLightGrey:"#e8e7e6",makerLightPink:"#ffeae8",makerWheat:"wheat",makerWhite:"white",makerBlack:"black",editor:"editor_editor__1nHIK",title:"editor_title__21REx"}},35:function(e,a,t){e.exports={mediaQuery:"62rem",makerWhite:"white",maker:"maker_maker__1Jsum",container:"maker_container__25Mis"}},40:function(e,a,t){e.exports={makerGrey:"#626262",makerWhite:"white",app:"app_app__cewju"}},42:function(e,a,t){e.exports={makerWheat:"wheat",makerGreen:"#385461",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerShadow:"rgba(217, 217, 217, 1)",makerBlack:"black",makerWhite:"white",button:"button_button__3_GL1"}},43:function(e,a,t){e.exports=t(64)},48:function(e,a,t){e.exports={makerWhite:"white"}},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(39),l=t.n(c),i=(t(48),t(25)),o=t(3),u=t(40),m=t.n(u),s=t(30),_=t.n(s),f=function(e){return r.a.createElement("footer",{className:_.a.footer},r.a.createElement("p",{className:_.a.title}," made by koeun "))},p=t(22),d=t.n(p),h=function(e){var a=e.onLogout;return r.a.createElement("header",{className:d.a.header},a&&r.a.createElement("button",{className:d.a.logout,onClick:a},"Logout"),r.a.createElement("img",{className:d.a.logo,src:"/images/logo.png",alt:""}),r.a.createElement("h1",{className:d.a.title},"Business Card Maker"))},k=t(14),g=t.n(k),E=function(e){var a=e.authService,t=Object(o.f)(),c=function(e){t.push({pathname:"/maker",state:{id:e}})},l=function(e){a.login(e.currentTarget.textContent).then((function(e){return c(e.user.uid)}))};return Object(n.useEffect)((function(){a.onAuthChange((function(e){e&&c(e.uid)}))})),r.a.createElement("section",{className:g.a.login},r.a.createElement(h,null),r.a.createElement("section",null,r.a.createElement("h1",null,"Login"),r.a.createElement("ul",{className:g.a.list},r.a.createElement("li",{className:g.a.item},r.a.createElement("button",{className:g.a.button,onClick:l},"Google")),r.a.createElement("li",{className:g.a.item},r.a.createElement("button",{className:g.a.button,onClick:l},"Github")))),r.a.createElement(f,null))},b=t(18),v=t(13),N=t(26),O=t(42),C=t.n(O),y=function(e){var a=e.name,t=e.onClick;return r.a.createElement("button",{className:C.a.button,onClick:t},a)},j=t(9),w=t.n(j),x=function(e){var a=e.FileInput,t=e.card,c=e.updateCard,l=e.deleteCard,i=Object(n.useRef)(),o=Object(n.useRef)(),u=Object(n.useRef)(),m=Object(n.useRef)(),s=Object(n.useRef)(),_=Object(n.useRef)(),f=t.name,p=t.company,d=t.title,h=t.email,k=t.message,g=t.theme,E=t.fileName,v=function(e){null!=e.currentTarget&&(e.preventDefault(),c(Object(b.a)({},t,Object(N.a)({},e.currentTarget.name,e.currentTarget.value))))};return r.a.createElement("form",{className:w.a.form},r.a.createElement("input",{ref:i,className:w.a.input,type:"text",name:"name",value:f,onChange:v}),r.a.createElement("input",{ref:o,className:w.a.input,type:"text",name:"company",value:p,onChange:v}),r.a.createElement("select",{ref:u,className:w.a.select,name:"theme",value:g,onChange:v},r.a.createElement("option",{value:"light"},"light"),r.a.createElement("option",{value:"dark"},"dark"),r.a.createElement("option",{value:"colorful"},"colorful")),r.a.createElement("input",{ref:m,className:w.a.input,type:"text",name:"title",value:d,onChange:v}),r.a.createElement("input",{ref:s,className:w.a.input,type:"text",name:"email",value:h,onChange:v}),r.a.createElement("textarea",{ref:_,className:w.a.textarea,name:"message",value:k,onChange:v}),r.a.createElement("div",{className:w.a.fileInput},r.a.createElement(a,{name:E,onFileChange:function(e){c(Object(b.a)({},t,{fileName:e.name,fileURL:e.url}))}})),r.a.createElement(y,{name:"Delete",onClick:function(){l(t)}}))},R=t(10),A=t.n(R),I=function(e){var a=e.FileInput,t=e.onAdd,c=Object(n.useRef)(),l=Object(n.useRef)(),i=Object(n.useRef)(),o=Object(n.useRef)(),u=Object(n.useRef)(),m=Object(n.useRef)(),s=Object(n.useRef)(),_=Object(n.useState)({fileName:null,fileURL:null}),f=Object(v.a)(_,2),p=f[0],d=f[1];return r.a.createElement("form",{ref:c,className:A.a.form},r.a.createElement("input",{ref:l,className:A.a.input,type:"text",name:"name",placeholder:"name"}),r.a.createElement("input",{ref:i,className:A.a.input,type:"text",name:"company",placeholder:"company"}),r.a.createElement("select",{ref:o,className:A.a.select,name:"theme",vlaue:"theme"},r.a.createElement("option",{placeholder:"light"},"light"),r.a.createElement("option",{placeholder:"dark"},"dark"),r.a.createElement("option",{placeholder:"colorful"},"colorful")),r.a.createElement("input",{ref:u,className:A.a.input,type:"text",name:"title",placeholder:"title"}),r.a.createElement("input",{ref:m,className:A.a.input,type:"text",name:"email",placeholder:"email"}),r.a.createElement("textarea",{ref:s,className:A.a.textarea,name:"message",placeholder:"message"}),r.a.createElement("div",{className:A.a.fileInput},r.a.createElement(a,{name:p.fileName,onFileChange:function(e){console.log(e),d({fileName:e.name,fileURL:e.url})}})),r.a.createElement(y,{name:"Add",onClick:function(e){e.preventDefault();var a={id:Date.now(),name:l.current.value||"",company:i.current.value||"",theme:o.current.value,title:u.current.value||"",email:m.current.value||"",message:s.current.value||"",fileName:p.fileName||"",fileURL:p.fileURL||""};c.current.reset(),d({fileName:null,fileURL:null}),t(a)}}))},S=t(34),P=t.n(S),L=function(e){var a=e.FileInput,t=e.cards,n=e.addCard,c=e.updateCard,l=e.deleteCard;return r.a.createElement("section",{className:P.a.editor},r.a.createElement("h1",{className:P.a.title},"Card Maker"),Object.keys(t).map((function(e){return r.a.createElement(x,{key:e,FileInput:a,card:t[e],updateCard:c,deleteCard:l})})),r.a.createElement(I,{FileInput:a,onAdd:n}))},T=t(8),W=t.n(T);function F(e){switch(e){case"dark":return W.a.dark;case"light":return W.a.light;case"colorful":return W.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var U=function(e){var a=e.card,t=a.name,n=a.company,c=a.title,l=a.email,i=a.message,o=a.theme,u=a.fileName,m=a.fileURL||"./images/default_logo.png";return r.a.createElement("li",{className:"".concat(W.a.card," ").concat(F(o))},r.a.createElement("img",{className:W.a.avata,src:m,alt:u}),r.a.createElement("div",{className:W.a.info},r.a.createElement("h1",{className:W.a.name},t),r.a.createElement("p",{className:W.a.company},n),r.a.createElement("p",{className:W.a.title},c),r.a.createElement("p",{className:W.a.email},l),r.a.createElement("p",{className:W.a.message},i)))},B=t(28),D=t.n(B),G=function(e){var a=e.cards;return r.a.createElement("section",{className:D.a.preview},r.a.createElement("h1",{className:D.a.title},"Card Preview"),r.a.createElement("ul",{className:D.a.cards},Object.keys(a).map((function(e){return r.a.createElement(U,{key:e,card:a[e]})}))))},K=t(35),M=t.n(K),z=function(e){var a=e.FileInput,t=e.authService,c=e.cardRepository,l=Object(o.f)().state,i=Object(n.useState)({}),u=Object(v.a)(i,2),m=u[0],s=u[1],_=Object(n.useState)(l&&l.id),p=Object(v.a)(_,2),d=p[0],k=p[1],g=Object(o.f)();Object(n.useEffect)((function(){t.onAuthChange((function(e){e?g.push("/"):(k(e.uid),console.log(d))}))}));var E=function(e){s((function(a){var t=Object(b.a)({},a);return t[e.id]=e,t})),c.saveCard(d,e)};return r.a.createElement("section",{className:M.a.maker},r.a.createElement(h,{onLogout:function(){t.logout()}}),r.a.createElement("div",{className:M.a.container},r.a.createElement(L,{FileInput:a,cards:m,addCard:E,updateCard:E,deleteCard:function(e){s((function(a){var t=Object(b.a)({},a);return delete t[e.id],t}))}}),r.a.createElement(G,{cards:m})),r.a.createElement(f,null))};var J=function(e){var a=e.FileInput,t=e.authService,n=e.cardRepository;return r.a.createElement("div",{className:m.a.app},r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(E,{authService:t})),r.a.createElement(o.a,{path:"/maker"},r.a.createElement(z,{FileInput:a,authService:t,cardRepository:n})))))},H=t(16),X=t(17),Q=t(19),V=t.n(Q),q={apiKey:"AIzaSyC5TMf61anMCoJPhT1U-UOzuX6-Wgscy0g",authDomain:"business-card-maker-77b80.firebaseapp.com",databaseURL:"https://business-card-maker-77b80.firebaseio.com",projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/card-maker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyC5TMf61anMCoJPhT1U-UOzuX6-Wgscy0g",REACT_APP_FIREBASE_AUTH_DOMAIN:"business-card-maker-77b80.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://business-card-maker-77b80.firebaseio.com"}).REACT_APP_FIREBASE_PROJECT_ID},Y=V.a.initializeApp(q),Z=function(){function e(){Object(H.a)(this,e)}return Object(X.a)(e,[{key:"login",value:function(e){var a=new(V.a.auth["".concat(e,"AuthProvider")]);return Y.auth().signInWithPopup(a)}},{key:"logout",value:function(){V.a.auth().signOut()}},{key:"onAuthChange",value:function(e){V.a.auth().onAuthStateChanged((function(a){e(a)}))}}]),e}(),$=t(20),ee=t.n($),ae=t(27),te=function(){function e(){Object(H.a)(this,e)}return Object(X.a)(e,[{key:"upload",value:function(){var e=Object(ae.a)(ee.a.mark((function e(a){var t,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",a),t.append("upload_preset","mqx3ic6b"),e.next=5,fetch("http://api.cloudinary.com/v1_1/du73cigo9/upload",{method:"POST",body:t});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}]),e}(),ne=t(15),re=t.n(ne),ce=function(e){var a=e.imageUploader,t=e.name,c=e.onFileChange,l=Object(n.useState)(!1),i=Object(v.a)(l,2),o=i[0],u=i[1],m=Object(n.useRef)(),s=function(){var e=Object(ae.a)(ee.a.mark((function e(t){var n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,a.upload(t.target.files[0]);case 3:n=e.sent,u(!1),console.log(n),c({name:n.original_filename,url:n.url});case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:re.a.container},r.a.createElement("input",{ref:m,className:re.a.input,type:"file",accept:"image/*",name:"file",onChange:s}),!o&&r.a.createElement("button",{className:"".concat(re.a.button," ").concat(t?re.a.pink:re.a.grey),onClick:function(e){e.preventDefault(),m.current.click()}},t||"No file"),o&&r.a.createElement("div",{className:re.a.loading}))},le=function(){function e(){Object(H.a)(this,e)}return Object(X.a)(e,[{key:"saveCard",value:function(e,a){}}]),e}(),ie=new Z,oe=new te,ue=new le;l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,{authService:ie,FileInput:function(e){return r.a.createElement(ce,Object.assign({},e,{imageUploader:oe}))},cardRepository:ue})),document.getElementById("root"))},8:function(e,a,t){e.exports={makerWheat:"wheat",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerShadow:"rgba(217, 217, 217, 1)",makerBlack:"black",makerWhite:"white",card:"card_card__1py-W",dark:"card_dark__1FdRe",light:"card_light__1Cc6G",colorful:"card_colorful__2zruV",avata:"card_avata__1OThp",info:"card_info__2Fslj",name:"card_name__31aE7",company:"card_company__3UM9t",title:"card_title__25_dG",email:"card_email__3uHYI",message:"card_message__2dRnZ"}},9:function(e,a,t){e.exports={mediaQuery:"62rem",makerWhite:"white",makerBlack:"black",form:"card_edit_form_form__2xQD4",input:"card_edit_form_input__uur0a",textarea:"card_edit_form_textarea__1-v1B",select:"card_edit_form_select__V3wH9",button:"card_edit_form_button__3Jpk4",fileInput:"card_edit_form_fileInput__3mXDK"}}},[[43,1,2]]]);
//# sourceMappingURL=main.00c67972.chunk.js.map