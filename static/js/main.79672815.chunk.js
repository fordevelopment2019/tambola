(this["webpackJsonptambola-app"]=this["webpackJsonptambola-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(2),r=a.n(c),o=(a(13),a(5)),s=a(3),m=a(4),i=a(6),u=a(7),d=(a(14),a(15),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={usedValues:[],nextNumber:0,message:""},e.renderTable=function(){for(var t={border:"1px solid black",textAlign:"center"},a={border:"1px solid black",textAlign:"center",color:"red",fontWeight:"bold"},n=[],c=0;c<90;c+=10){for(var r=[],o=c+1;o<=c+10;o++){var s=t,m=document.getElementById(o);null!==m&&(e.state.nextNumber!==o&&""===m.style.color||(s=a)),r.push(l.a.createElement("td",{style:s,id:o,key:o},o))}n.push(l.a.createElement("tr",{key:c},r))}return n},e.getUniqueInt=function(){if(e.state.usedValues.length>=90)e.setState({message:"Game Over"});else{for(var t=Math.floor(91*Math.random());0===t||e.state.usedValues.find((function(e){return e===t}))>0;)t=Math.floor(91*Math.random());var a=[].concat(Object(o.a)(e.state.usedValues),[t]);console.log("NewValue",a),e.setState({usedValues:a,nextNumber:t})}},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"d-flex p-2 justify-content-center alert-warning mb-2"},"Tambola"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"#"),l.a.createElement("th",{scope:"col"},"#"))),l.a.createElement("tbody",null,this.renderTable()))),l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-primary mb-2",style:{width:"100%"},onClick:this.getUniqueInt},"Next Number"),l.a.createElement("div",{className:"w-100"}),l.a.createElement("div",null,l.a.createElement("p",{className:"mt-5 font-weight-bold display-1 d-flex p-2 justify-content-center",id:"number"},""===this.state.message?this.state.nextNumber:this.state.message)))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.79672815.chunk.js.map