(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=(a(179),a(97),a(98),a(99),a(41)),l=a.n(n),r=a(8),o=a.n(r),c=a(276),p=a(174),d=a(180),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={language:"",level:""},a.defaultRepo="/incubator.",a.experimentalRepo="/experimental",a.stableRepo="/stable",a.tiles=a.props.stacks.map(function(e){if(null==e)return null;var t=e.templates[0].url.split("/").reverse()[0].split(".")[0],s="https://github.com/appsody/stacks/tree/master/"+t+"/"+e.id;return e.templates[0].url.includes(a.defaultRepo)?i.a.createElement(d.a,{id:e.id,heading:e.name,desc:e.description,cmd:"appsody init "+e.id,github:s}):i.a.createElement(d.a,{id:e.id,heading:e.name,desc:e.description,cmd:"appsody init "+t+"/"+e.id,github:s})}),a.filterByLanguage=a.filterByLanguage.bind(l()(a)),a.filterByLevel=a.filterByLevel.bind(l()(a)),a}o()(t,e);var a=t.prototype;return a.filterByLanguage=function(){var e=this;document.getElementsByName("language").forEach(function(t){t.checked&&!m.includes(t.value)?(m.push(t.value),e.setState({language:t.value})):!t.checked&&m.indexOf(t.value)>-1&&(m.splice(m.indexOf(t.value),1),e.setState({language:""}))}),this.rerenderTiles()},a.filterByLevel=function(){var e=this;document.getElementsByName("level").forEach(function(t){var a;if(t.checked&&!h.includes(t.value))h.push(t.value),e.setState(((a={})[h]=t.value,a));else if(!t.checked&&h.indexOf(t.value)>-1){var s;h.splice(h.indexOf(t.value),1),e.setState(((s={})[h]="",s))}}),this.rerenderTiles()},a.rerenderTiles=function(){var e=this;1===h.length&&h.includes("incubator")||2===h.length&&h.includes("stable")&&h.includes("incubator")?0!==m.length?this.tiles=this.props.stacks.map(function(t){for(var a=0;a<h.length+m.length;a++)if(null!==t&&t.language.includes(m[a])&&t.templates[0].url.includes(e.defaultRepo)){if(null==t)return null;var s=t.templates[0].url.split("/").reverse()[0].split(".")[0],n="https://github.com/appsody/stacks/tree/master/"+s+"/"+t.id;return t.templates[0].url.includes(e.defaultRepo)?i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+t.id,github:n}):i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+s+"/"+t.id,github:n})}}):this.tiles=this.props.stacks.map(function(t){for(var a=0;a<h.length;a++)if(null!==t&&t.templates[0].url.includes(e.defaultRepo)){if(null==t)return null;var s=t.templates[0].url.split("/").reverse()[0].split(".")[0],n="https://github.com/appsody/stacks/tree/master/"+s+"/"+t.id;return t.templates[0].url.includes(e.defaultRepo)?i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+t.id,github:n}):i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+s+"/"+t.id,github:n})}}):1===h.length&&h.includes("experimental")||2===h.length&&h.includes("stable")&&h.includes("experimental")?0!==m.length?this.tiles=this.props.stacks.map(function(t){for(var a=0;a<h.length+m.length;a++)if(null!==t&&t.language.includes(m[a])&&t.templates[0].url.includes(e.experimentalRepo)){if(null==t)return null;var s=t.templates[0].url.split("/").reverse()[0].split(".")[0],n="https://github.com/appsody/stacks/tree/master/"+s+"/"+t.id;return t.templates[0].url.includes(e.defaultRepo)?i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+t.id,github:n}):i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+s+"/"+t.id,github:n})}}):this.tiles=this.props.stacks.map(function(t){for(var a=0;a<h.length;a++)if(null!==t&&t.templates[0].url.includes(e.experimentalRepo)){if(null==t)return null;var s=t.templates[0].url.split("/").reverse()[0].split(".")[0],n="https://github.com/appsody/stacks/tree/master/"+s+"/"+t.id;return t.templates[0].url.includes(e.defaultRepo)?i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+t.id,github:n}):i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+s+"/"+t.id,github:n})}}):1===h.length&&h.includes("stable")?0!==m.length?this.tiles=this.props.stacks.map(function(t){for(var a=0;a<h.length+m.length;a++)if(null!==t&&t.language.includes(m[a])&&t.templates[0].url.includes(e.stableRepo)){if(null==t)return null;var s=t.templates[0].url.split("/").reverse()[0].split(".")[0],n="https://github.com/appsody/stacks/tree/master/"+s+"/"+t.id;return t.templates[0].url.includes(e.defaultRepo)?i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+t.id,github:n}):i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+s+"/"+t.id,github:n})}}):this.tiles=this.props.stacks.map(function(t){for(var a=0;a<h.length;a++)if(null!==t&&t.templates[0].url.includes(e.stableRepo)){if(null==t)return null;var s=t.templates[0].url.split("/").reverse()[0].split(".")[0],n="https://github.com/appsody/stacks/tree/master/"+s+"/"+t.id;return t.templates[0].url.includes(e.defaultRepo)?i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+t.id,github:n}):i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+s+"/"+t.id,github:n})}}):0!==m.length?this.tiles=this.props.stacks.map(function(t){for(var a=0;a<m.length;a++)if(null!==t&&t.language.includes(m[a])){if(null==t)return null;var s=t.templates[0].url.split("/").reverse()[0].split(".")[0],n="https://github.com/appsody/stacks/tree/master/"+s+"/"+t.id;return t.templates[0].url.includes(e.defaultRepo)?i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+t.id,github:n}):i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+s+"/"+t.id,github:n})}}):this.tiles=this.props.stacks.map(function(t){if(null==t)return null;var a=t.templates[0].url.split("/").reverse()[0].split(".")[0],s="https://github.com/appsody/stacks/tree/master/"+a+"/"+t.id;return t.templates[0].url.includes(e.defaultRepo)?i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+t.id,github:s}):i.a.createElement(d.a,{id:t.id,heading:t.name,desc:t.description,cmd:"appsody init "+a+"/"+t.id,github:s})})},a.moveSidebar=function(){document.getElementById("funnel-icon").classList.toggle("open"),g=!g,document.getElementById("sidebar").style.marginLeft=g?"0":"-100vw"},a.render=function(){var e=this;this.props.stacks.forEach(function(e){if(null==e)return null;null!==e&&(f.includes(e.language)||f.push(e.language))});var t=f.map(function(t){return i.a.createElement("li",null,i.a.createElement("input",{className:"language checkbox-item",onClick:e.filterByLanguage,type:"checkbox",name:"language",value:t}),t)});return i.a.createElement(i.a.Fragment,null,i.a.createElement("aside",{id:"sidebar",className:"sidebar"},i.a.createElement("label",{className:"stacks-level"},"Stack Level"),i.a.createElement("ul",{className:"checkbox-list"},i.a.createElement("li",{className:"checkbox-item"},i.a.createElement("input",{className:"checkbox-item",onClick:this.filterByLevel,type:"checkbox",name:"level",value:"experimental"})," Experimental"),i.a.createElement("li",{className:"checkbox-item"},i.a.createElement("input",{className:"checkbox-item",onClick:this.filterByLevel,type:"checkbox",name:"level",value:"incubator"})," Incubator"),i.a.createElement("li",{className:"checkbox-item"},i.a.createElement("input",{className:"checkbox-item",onClick:this.filterByLevel,type:"checkbox",name:"level",value:"stable"})," Stable")),i.a.createElement("label",{className:"stacks-functions"},"Language"),i.a.createElement("ul",{className:"checkbox-list"},t)),i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"application-stacks",className:"row mx-auto"},0===this.tiles.filter(function(e){return void 0!==e}).length?i.a.createElement("span",{className:"no-result-found"},"No Results Found"):this.tiles)),i.a.createElement("section",{onClick:function(){return e.moveSidebar()},className:"funnel-icon",id:"funnel-icon"},i.a.createElement("i",{className:"fas fa-filter"})))},t}(i.a.Component),m=[],h=[],g=!1,f=[],v=function(){return i.a.createElement(p.b,{query:"3185758617",render:function(e){var t=[];return e.allIndexesYaml.nodes.forEach(function(e){t=t.concat(e.stacks)}),i.a.createElement(u,{stacks:t})},data:c})},b=a(185);t.default=function(){return i.a.createElement(b.a,null,i.a.createElement("section",{className:"stacks-section"},i.a.createElement("div",{className:"stacks mb-5"},i.a.createElement("h2",null,"Application Stacks"),i.a.createElement("p",{className:"px-5"},"Select the application stack to view further details on GitHub or copy the command to start using the stack with our CLI."),i.a.createElement(v,null))))}},179:function(e,t,a){var s=a(12).f,i=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in i||a(11)&&s(i,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},180:function(e,t,a){"use strict";var s=a(41),i=a.n(s),n=a(8),l=a.n(n),r=a(0),o=a.n(r),c=function(e){function t(t){var a;if((a=e.call(this,t)||this).props.desc.length>70){var s=a.props.desc.substr(0,70);a.desc=a.props.desc.substr(0,Math.min(s.length,s.lastIndexOf(" ")))+"..."}else a.desc=a.props.desc;return a.state={isToggleOn:!0},a.handleClick=a.handleClick.bind(i()(a)),a.copy=a.copy.bind(i()(a)),a}l()(t,e);var a=t.prototype;return a.copy=function(){var e=this.props.id;document.querySelector("#"+e+" input").select(),document.execCommand("copy")},a.handleClick=function(e){e.preventDefault(),this.setState(function(e){return{isToggleOn:!e.isToggleOn}})},a.render=function(){return this.state.isToggleOn?o.a.createElement("div",{className:"tile card text-center"},o.a.createElement("h5",{className:"heading-tile"},this.props.heading),o.a.createElement("p",null,this.desc),o.a.createElement("a",{href:"/",onClick:this.handleClick,className:"btn btn-primary w-50 mx-auto",role:"button"},"Select"),this.props.updated&&o.a.createElement("p",{className:"updated-date"},"Updated: ",new Date(this.props.updated).getDate()+"/"+(new Date(this.props.updated).getMonth()+1))):o.a.createElement("div",{id:this.props.id,className:"tile card flip"},o.a.createElement("i",{onClick:this.handleClick,className:"fas fa-arrow-left",title:"flip card"}),o.a.createElement("h5",{id:"tile-heading",className:"heading-tile"},this.props.heading),o.a.createElement("div",{id:"command-input"},o.a.createElement("input",{id:"input-cli",type:"text",name:"cli",value:this.props.cmd,readOnly:!0}),o.a.createElement("i",{onClick:this.copy,className:"far fa-copy"})),o.a.createElement("a",{href:this.props.github,className:"btn btn-clear w-75 mx-auto",role:"button"},"View in GitHub"))},t}(o.a.Component);t.a=c},276:function(e){e.exports={data:{allIndexesYaml:{nodes:[{stacks:[{id:"quarkus",name:"Quarkus",description:"Quarkus runtime for running Java applications",templates:[{url:"https://github.com/appsody/stacks/releases/download/quarkus-v0.2.2/experimental.quarkus.v0.2.2.templates.default.tar.gz"}],language:"java"},{id:"rocket",name:"Rocket",description:"Rocket web framework for Rust",templates:[{url:"https://github.com/appsody/stacks/releases/download/rocket-v0.1.0/experimental.rocket.v0.1.0.templates.simple.tar.gz"}],language:"rust"},{id:"rust",name:"Rust",description:"Runtime for Rust applications",templates:[{url:"https://github.com/appsody/stacks/releases/download/rust-v0.1.4/experimental.rust.v0.1.4.templates.simple.tar.gz"}],language:"rust"},{id:"vertx",name:"Eclipse Vert.x",description:"Eclipse Vert.x runtime for running Java applications",templates:[{url:"https://github.com/appsody/stacks/releases/download/vertx-v0.1.4/experimental.vertx.v0.1.4.templates.default.tar.gz"}],language:"java"},{id:"java-spring-boot2-liberty",name:"Spring Boot® on Open Liberty",description:"Spring Boot on Open Liberty & OpenJ9 using Maven",templates:[{url:"https://github.com/appsody/stacks/releases/download/java-spring-boot2-liberty-v0.1.11/experimental.java-spring-boot2-liberty.v0.1.11.templates.default.tar.gz"}],language:"java"},{id:"nodejs-functions",name:"Node.js Functions",description:"Serverless runtime for Node.js functions",templates:[{url:"https://github.com/appsody/stacks/releases/download/nodejs-functions-v0.2.0/experimental.nodejs-functions.v0.2.0.templates.simple.tar.gz"}],language:"nodejs"}]},{stacks:[{id:"java-microprofile",name:"Eclipse MicroProfile®",description:"Eclipse MicroProfile on Open Liberty & OpenJ9 using Maven",templates:[{url:"https://github.com/appsody/stacks/releases/download/java-microprofile-v0.2.21/incubator.java-microprofile.v0.2.21.templates.default.tar.gz"}],language:"java"},{id:"kitura",name:"Kitura",description:"Runtime for Kitura applications",templates:[{url:"https://github.com/appsody/stacks/releases/download/kitura-v0.2.3/incubator.kitura.v0.2.3.templates.default.tar.gz"}],language:"swift"},{id:"nodejs-loopback",name:"LoopBack 4",description:"LoopBack 4 API Framework for Node.js",templates:[{url:"https://github.com/appsody/stacks/releases/download/nodejs-loopback-v0.1.8/incubator.nodejs-loopback.v0.1.8.templates.scaffold.tar.gz"}],language:"nodejs"},{id:"python-flask",name:"Python Flask",description:"Flask web Framework for Python",templates:[{url:"https://github.com/appsody/stacks/releases/download/python-flask-v0.1.6/incubator.python-flask.v0.1.6.templates.simple.tar.gz"}],language:"python"},{id:"starter",name:"Starter Sample",description:"Runnable starter stack, copy to create a new stack",templates:[{url:"https://github.com/appsody/stacks/releases/download/starter-v0.1.1/incubator.starter.v0.1.1.templates.simple.tar.gz"}],language:"bash"},{id:"swift",name:"Swift",description:"Appsody runtime for Swift applications",templates:[{url:"https://github.com/appsody/stacks/releases/download/swift-v0.2.3/incubator.swift.v0.2.3.templates.simple.tar.gz"}],language:"swift"},{id:"node-red",name:"Node-RED",description:"Node-RED runtime for running flows",templates:[{url:"https://github.com/appsody/stacks/releases/download/node-red-v0.1.0/incubator.node-red.v0.1.0.templates.simple.tar.gz"}],language:"nodejs"},{id:"nodejs",name:"Node.js",description:"Runtime for Node.js applications",templates:[{url:"https://github.com/appsody/stacks/releases/download/nodejs-v0.3.0/incubator.nodejs.v0.3.0.templates.simple.tar.gz"}],language:"nodejs"},{id:"nodejs-express",name:"Node.js Express",description:"Express web framework for Node.js",templates:[{url:"https://github.com/appsody/stacks/releases/download/nodejs-express-v0.3.0/incubator.nodejs-express.v0.3.0.templates.scaffold.tar.gz"},{url:"https://github.com/appsody/stacks/releases/download/nodejs-express-v0.3.0/incubator.nodejs-express.v0.3.0.templates.simple.tar.gz"}],language:"nodejs"},{id:"java-spring-boot2",name:"Spring Boot®",description:"Spring Boot using OpenJ9 and Maven",templates:[{url:"https://github.com/appsody/stacks/releases/download/java-spring-boot2-v0.3.21/incubator.java-spring-boot2.v0.3.21.templates.kotlin.tar.gz"},{url:"https://github.com/appsody/stacks/releases/download/java-spring-boot2-v0.3.21/incubator.java-spring-boot2.v0.3.21.templates.default.tar.gz"}],language:"java"}]},{stacks:null}]}}}}}]);
//# sourceMappingURL=component---src-pages-stacks-js-002692df20f67fbbaea1.js.map