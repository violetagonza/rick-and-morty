(this.webpackJsonpejercicio1=this.webpackJsonpejercicio1||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/Rick_and_Morty-logo.75509f2e.png"},19:function(e,a,t){e.exports=t(34)},24:function(e,a,t){},25:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),o=t(5),s=t(12),m=(t(24),function(e){return c.a.createElement("form",{onSubmit:function(e){e.preventDefault()},className:"form"},c.a.createElement("label",{htmlFor:"name"},c.a.createElement("input",{onChange:function(a){e.handleChange(a.target.value)},className:"form--input",type:"text",name:"name",id:"name",placeholder:"Busca un personaje"})))}),i=(t(25),function(e){return c.a.createElement("li",{className:"card",key:e.character.id},c.a.createElement(o.b,{className:"card--link",to:"/character/".concat(e.character.id)},c.a.createElement("div",{className:"card-img"},c.a.createElement("img",{className:"card--img__photo",src:e.character.photo,alt:e.character.name})),c.a.createElement("div",{className:"card--text"},c.a.createElement("h3",null," ",e.character.name),c.a.createElement("p",null," ",e.character.species))))}),u=(t(31),function(e){var a;return a=e.charactersInfo.map((function(e){return c.a.createElement(i,{key:e.id,character:e})})),c.a.createElement("ul",{className:"list"},a)}),h=(t(32),function(e){return void 0===e.characterInfo?c.a.createElement("aside",{className:"modal"},c.a.createElement(o.b,{className:"modal--link",to:"/"},c.a.createElement("i",{className:"fas fa-chevron-left"})," Volver"),c.a.createElement("p",{className:"modal--text"},"Aqu\xed no hay nada")):c.a.createElement("aside",{className:"modal"},c.a.createElement("div",null,c.a.createElement(o.b,{className:"modal--link",to:"/"},c.a.createElement("i",{className:"fas fa-chevron-left"})," Volver"),c.a.createElement("img",{className:"modal--img",src:e.characterInfo.photo,alt:e.characterInfo.name})),c.a.createElement("div",{className:"modal--text"},c.a.createElement("h4",null,e.characterInfo.name),c.a.createElement("p",null,"Estatus: ".concat(e.characterInfo.status)),c.a.createElement("p",null,"Especie: ".concat(e.characterInfo.species)),c.a.createElement("p",null,"Origen: ".concat(e.characterInfo.origin)),c.a.createElement("p",null,"Episodios: ".concat(e.characterInfo.episodes))))}),p=t(6),f=t(18),d=t.n(f),E=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){var a=[];return e.results.map((function(e){return a.push({id:e.id,name:e.name,photo:e.image,status:e.status,species:e.species,origin:e.origin.name,episodes:parseInt(e.episode.length)})})),a}))},g=(t(33),function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),i=o[0],f=o[1];Object(n.useEffect)((function(){E().then((function(e){r(e)}))}),[]);console.log(i);var g=function(e){var a=e.match.params.id,n=t.find((function(e){return e.id===parseInt(a)}));return c.a.createElement(h,{characterInfo:n})};return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("img",{className:"header--img",src:d.a,alt:"Rick y Morty"})),c.a.createElement("main",{className:"main"},c.a.createElement(m,{handleChange:function(e){var a=[{name:"Lo sentimos: ".concat(e," no se ha encontrado"),photo:"https://www.cordesansantiago.cl/wp-content/uploads/2016/11/blank-profile-picture-973460_960_720.png",id:"akjhsJK"}],n=t.filter((function(a){return a.name.toUpperCase().includes(e.toUpperCase())}));console.log(n),0===n.length?f(a):f(n)}}),c.a.createElement(u,{handleClick:g,charactersInfo:""===i?t:i})),c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/character/:id",render:g})))});l.a.render(c.a.createElement(o.a,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ee0ddb55.chunk.js.map