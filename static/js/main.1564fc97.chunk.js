(window["webpackJsonpaws-try"]=window["webpackJsonpaws-try"]||[]).push([[0],{26:function(e,t){},438:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),l=a(51),r=a.n(l),o=a(52),i=a(8),s=a(9),m=a(12),u=a.n(m);u.a.config.region="us-east-1",u.a.config.credentials=new u.a.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:cc9fadcf-503b-41f1-a7c1-7f1da0b9a014"});var f=new u.a.Rekognition({apiVersion:"2016-06-27"}),d=(new u.a.S3({apiVersion:"2006-03-01"}),function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],m=o[1],u=Object(n.useState)([{}]),d=Object(s.a)(u,2),b=d[0],g=d[1],E=Object(n.useState)(!1),p=Object(s.a)(E,2),v=p[0],y=p[1];Object(n.useEffect)(function(){if(a){var e=new FileReader;e.readAsDataURL(a),e.onload=function(){m(e.result)}}},[a,i]);var h=function(){var e=new FileReader;a?(e.readAsArrayBuffer(a),e.onload=function(){var t={Image:{Bytes:e.result}};y(!0),f.recognizeCelebrities(t,function(e,t){e?console.log(e):(g(t),y(!1))})}):alert("You need to upload Image")};return c.a.createElement("div",null,c.a.createElement("p",null,"Upload any image "),c.a.createElement("div",{className:"custom-file"},c.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:function(e){l(e.target.files[0]),console.log("Image Info",e.target.files[0])},accept:"image/*"}),c.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},a.name||"Choose file")),c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:i,className:"mx-auto my-4",width:450}),c.a.createElement("br",null),!1===v&&a?c.a.createElement("button",{className:"btn btn-primary mx-auto mb-4",onClick:h},"Detect"):!0===v&&a?c.a.createElement("button",{className:"btn btn-primary mx-auto mb-4 disabled"},"Loading ..."):void 0),function(){if(b.CelebrityFaces)return b.CelebrityFaces.map(function(e){return c.a.createElement("div",{key:e.Id,className:"d-flex justify-content-around alert alert-success mx-1"},c.a.createElement("strong",null,e.Name),c.a.createElement("div",null,"Match: ",e.MatchConfidence," %"))})}(),function(){if(b.UnrecognizedFaces&&b.UnrecognizedFaces.length>0)return c.a.createElement("div",{className:"alert alert-danger"},c.a.createElement("strong",null,b.UnrecognizedFaces.length)," faces can not regconized")}())}),b=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",{className:"custom-file"},c.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:function(e){l(e.target.files[0])},accept:"image/*"}),c.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},a.name||"Choose file"))},g=function(){return c.a.createElement(o.a,{basename:"/"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"mx-auto my-4"},"Face Regkonition"),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:d}),c.a.createElement(i.a,{path:"/video",exact:!0,component:b}))))};r.a.render(c.a.createElement(g,null),document.getElementById("root"))},55:function(e,t,a){e.exports=a(438)}},[[55,1,2]]]);
//# sourceMappingURL=main.1564fc97.chunk.js.map