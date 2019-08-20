(window["webpackJsonpcoachbot-client"]=window["webpackJsonpcoachbot-client"]||[]).push([[0],{167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(57),o=a.n(s),l=(a(67),a(1)),c=a(2),i=a(4),u=a(3),m=a(5),d=a(8),h=a(14),p=(a(68),a(69),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.goal;return r.a.createElement(d.b,{to:"/goal/".concat(e.id),onClick:this.props.hideNav,className:"goal-list-item"},r.a.createElement("header",{className:"goal-list-header"},r.a.createElement("h2",null,e.title)),r.a.createElement("footer",null,r.a.createElement("span",{className:"goal-list-schedule"},"Schedule: ",e.schedule),r.a.createElement("span",{className:"goal-list-date"},"Last Log: ",e.last_logged)))}}]),t}(r.a.Component)),g=(a(74),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",days:{Sun:!1,Mon:!1,Tue:!1,Wed:!1,Thu:!1,Fri:!1,Sat:!1},error:"",button:"Add Goal",formTitle:"New Goal"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderDayClass",value:function(e){return this.state[e]?"add-day":"add-day active-day"}},{key:"switchActiveDay",value:function(e){var t=!this.state[e],a=this.state.days;console.log("cheese",t),a[e]=t,this.setState({days:a})}},{key:"submitGoal",value:function(e){e.preventDefault();var t=this.state,a=t.title,n=t.days,r=Object.keys(n).filter(function(e){return n[e]}).length;if(a)if(r){this.setState({error:"Must choose at least one day"})}else{var s="";n.forEach(function(e){n[e]&&(s+=e+"/")}),s.trim("/");var o={title:a,schedule:s};this.props.addGoal(o),this.setState({error:""})}else{this.setState({error:"Goal must have title"})}}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.days).map(function(t,a){return r.a.createElement("button",{key:a,type:"button",name:"add-goal-schedule day",onClick:function(){return e.switchActiveDay(t)},className:e.renderDayClass(t)},t)});return r.a.createElement("form",{className:"add-goal-form"},r.a.createElement("legend",null,this.props.formTitle||this.state.formTitle),r.a.createElement("label",{htmlFor:"add-goal-title"},"Title"),r.a.createElement("input",{onChange:function(t){return e.setState({title:t.target.value})},required:!0,name:"add-goal-title",id:"add-goal-title"}),r.a.createElement("div",{className:"add-goal-schedule"},r.a.createElement("label",{htmlFor:"add-schedule"},"Schedule"),t),this.state.error,r.a.createElement("button",{disabled:this.state.error,type:"submit"},this.props.button||this.state.button))}}]),t}(r.a.Component)),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={goals:[{id:1,last_logged:(new Date).toDateString(),title:"Karate",schedule:"M/W/F",subgoals:[],motivation:[]},{id:2,last_logged:(new Date).toDateString(),title:"Save Money",schedule:"M/Tu/W/Th/F",subgoals:[],motivation:[]},{id:3,last_logged:(new Date).toDateString(),title:"Learn Chess",schedule:"Sa/Su",subgoals:[],motivation:[]}],modalClass:"modal",error:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"renderGoals",value:function(){var e=this;return this.state.goals.map(function(t){return r.a.createElement(p,{hideNav:e.props.hideNav,key:t.id,goal:t})})}},{key:"displayGoalForm",value:function(){var e="modal modal-active"===this.state.modalClass?"modal":"modal modal-active";this.setState({modalClass:e})}},{key:"addGoal",value:function(e){var t=this.state.goals,a={id:t.length+1,last_logged:"New Goal",schedule:e.schedule,title:e.title,subgoals:[],motivation:[]};t.push(a),this.setState({goals:t})}},{key:"render",value:function(){var e=this,t=this.state.error;return r.a.createElement("section",{className:"goal-list"},t?r.a.createElement("p",{className:"red"},"There was an error, try again"):this.renderGoals(),r.a.createElement("div",{onClick:function(){return e.displayGoalForm()},className:"goal-list-item add-goal"},"+ Add Goal"),r.a.createElement("div",{className:this.state.modalClass},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close",onClick:function(){return e.displayGoalForm()}},"\xd7"),r.a.createElement(g,{addGoal:function(t){return e.addGoal(t)}}))))}}]),t}(n.Component),f=(r.a.Component,a(60)),v=(a(167),{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Monthly Ratings",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[5,3,7,8,5,10,4]}]}),y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.chart.chartInstance.data.datasets;console.log(e[0].data)}},{key:"render",value:function(){return r.a.createElement("div",{className:"line-chart"},r.a.createElement(f.a,{ref:"chart",data:v,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}))}}]),t}(r.a.Component),E=(a(168),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"stats-page"},r.a.createElement("h2",null,"Stats"),r.a.createElement(y,null),r.a.createElement("p",null,"Longest Streak: 20 days"),r.a.createElement("p",null,"Total hours: 300 hrs"),r.a.createElement("p",null,"33 hrs to goal completion"))}}]),t}(r.a.Component)),O=(a(169),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",days:{Sun:!1,Mon:!1,Tue:!1,Wed:!1,Thu:!1,Fri:!1,Sat:!1},error:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderDayClass",value:function(e){return this.state[e]?"add-day":"add-day active-day"}},{key:"switchActiveDay",value:function(e){var t=!this.state[e],a=this.state.days;console.log("cheese",t),a[e]=t,this.setState({days:a})}},{key:"submitGoal",value:function(e){e.preventDefault();var t=this.state,a=t.title,n=t.days,r=Object.keys(n).filter(function(e){return n[e]}).length;if(a)if(r){this.setState({error:"Must choose at least one day"})}else{var s="";n.forEach(function(e){n[e]&&(s+=e+"/")}),s.trim("/");var o={title:a,schedule:s};this.props.addGoal(o),this.setState({error:""})}else{this.setState({error:"Goal must have title"})}}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.days).map(function(t,a){return r.a.createElement("button",{key:a,type:"button",name:"add-goal-schedule day",onClick:function(){return e.switchActiveDay(t)},className:e.renderDayClass(t)},t)});return r.a.createElement("form",{className:"add-goal-form"},r.a.createElement("legend",null,"Change Goal Settings"),r.a.createElement("label",{htmlFor:"add-goal-title"},"Title"),r.a.createElement("input",{onChange:function(t){return e.setState({title:t.target.value})},required:!0,name:"add-goal-title",id:"add-goal-title"}),r.a.createElement("label",{htmlFor:"goal-hours"},"Target Hours:"),r.a.createElement("input",{name:"goal-hours",id:"goal-hours"}),r.a.createElement("div",{className:"add-goal-schedule"},r.a.createElement("label",{htmlFor:"add-schedule"},"Schedule"),t),this.state.error,r.a.createElement("button",{disabled:this.state.error,type:"submit"},"Apply"))}}]),t}(r.a.Component)),j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Settings"),r.a.createElement(O,null))}}]),t}(r.a.Component),k=(a(170),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={messages:[],msg:"chat will be implemented here"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"changeMessage",value:function(e){this.setState({msg:e})}},{key:"addMessage",value:function(e){e.preventDefault();var t=this.state,a=t.messages,n=t.msg;a.push(n),n="",this.setState({msg:n,messages:a})}},{key:"render",value:function(){var e=this,t=this.state.messages.map(function(e){return r.a.createElement("div",null,e)});return r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"messages"},t),r.a.createElement("form",{onSubmit:function(t){return e.addMessage(t)}},r.a.createElement("input",{onChange:function(t){return e.changeMessage(t.target.value)},value:this.state.msg}),r.a.createElement("button",{type:"submit"},"send")))}}]),t}(r.a.Component)),N=(a(171),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params;console.log(e)}},{key:"render",value:function(){var e=this.props.match.path.replace(":goalId",this.props.match.params.goalId);return r.a.createElement("section",{className:"coach-page"},r.a.createElement("nav",{className:"coach-nav"},r.a.createElement(d.b,{to:"/",onClick:this.props.showNav},"<-"),r.a.createElement(d.b,{to:"".concat(e,"/")},"Chat"),r.a.createElement(d.b,{to:"".concat(e,"/stats")},"Stats"),r.a.createElement(d.b,{to:"".concat(e,"/settings")},"Settings")),r.a.createElement("div",{className:"coach-view"},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"".concat(e,"/stats"),component:E}),r.a.createElement(h.b,{path:"".concat(e,"/settings"),component:j}),r.a.createElement(h.b,{component:k}))))}}]),t}(r.a.Component)),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"missing-page"},"Yo I'm missing")}}]),t}(r.a.Component),C=(a(172),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={display:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"showNav",value:function(){this.setState({display:""})}},{key:"hideNav",value:function(){this.setState({display:"hidden"})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"user view"},r.a.createElement("nav",{className:this.state.display},r.a.createElement(d.b,{to:"/"},r.a.createElement("span",{className:"logo"},"Coach")),r.a.createElement(d.b,{to:"/login",onClick:function(){return e.props.logout()}},"Logout")),r.a.createElement("main",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(b,{hideNav:function(){return e.hideNav()}})}}),r.a.createElement(h.b,{path:"/login",render:function(){return r.a.createElement(h.a,{to:"/"})}}),r.a.createElement(h.b,{path:"/goal/:goalId",render:function(t){var a=t.match;return r.a.createElement(N,{match:a,showNav:function(){return e.showNav()}})}}),r.a.createElement(h.b,{component:S}))))}}]),t}(r.a.Component)),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"landing-page"},"Landing Page")}}]),t}(r.a.Component),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.error;return r.a.createElement("form",{className:"LoginForm",onSubmit:function(t){return e.props.onLoginSuccess(t)}},r.a.createElement("div",{role:"alert"},t&&r.a.createElement("p",{className:"red"},t)),r.a.createElement("div",{className:"user_name"},r.a.createElement("label",{htmlFor:"LoginForm__user_name"},"User name"),r.a.createElement("input",{required:!0,name:"user_name",id:"LoginForm__user_name"})),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"LoginForm__password"},"Password"),r.a.createElement("input",{required:!0,name:"password",type:"password",id:"LoginForm__password"})),r.a.createElement("button",{type:"submit"},"Login"))}}]),t}(n.Component);F.defaultProps={onLoginSuccess:function(){}};var D=F,A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={login:!1},a.handleLoginSuccess=function(e){e.preventDefault(),a.props.login(),a.setState({login:!0})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"LoginPage"},r.a.createElement("h2",null,"Login"),r.a.createElement(D,{onLoginSuccess:this.handleLoginSuccess}))}}]),t}(n.Component);A.defaultProps={location:{},history:{push:function(){}}};var L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{className:"RegistrationForm",onSubmit:this.handleSubmit},r.a.createElement("div",{role:"alert"},e&&r.a.createElement("p",{className:"red"},e)),r.a.createElement("div",{className:"reg-name"},r.a.createElement("label",{htmlFor:"registration-name"},"Name"),r.a.createElement("input",{name:"name",type:"text",required:!0,id:"registration-name"})),r.a.createElement("div",{className:"reg-username"},r.a.createElement("label",{htmlFor:"registration-username"},"Username"),r.a.createElement("input",{name:"username",type:"text",required:!0,id:"registration-username"})),r.a.createElement("div",{className:"reg-password"},r.a.createElement("label",{htmlFor:"registration-password"},"Password"),r.a.createElement("input",{name:"password",type:"password",required:!0,id:"registration-password"})),r.a.createElement("button",{type:"submit"},"Register"))}}]),t}(n.Component);L.defaultProps={onRegistrationSuccess:function(){}};var G=L,M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleRegistrationSuccess=function(e){a.props.history.push("/login")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"RegistrationPage"},r.a.createElement("h2",null,"Register"),r.a.createElement(G,{onRegistrationSuccess:this.handleRegistrationSuccess}))}}]),t}(n.Component);M.defaultProps={history:{push:function(){}}};var _=M,T=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"new-user view"},r.a.createElement("nav",null,r.a.createElement(d.b,{to:"/"},r.a.createElement("span",{className:"logo"},"Coach")),r.a.createElement("div",{className:"new-user-links"},r.a.createElement(d.b,{to:"/register"},"Register"),r.a.createElement(d.b,{to:"/login"},"Login"))),r.a.createElement("main",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:w}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(A,{login:function(){return e.props.login()}})}}),r.a.createElement(h.b,{exact:!0,path:"/register",component:_}),r.a.createElement(h.b,{component:S}))))}}]),t}(r.a.Component),R=(a(173),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"login",value:function(){this.setState({user:!0})}},{key:"logout",value:function(){this.setState({user:!1})}},{key:"render",value:function(){var e=this,t=this.state.user?r.a.createElement(C,{logout:function(){return e.logout()}}):r.a.createElement(T,{login:function(){return e.login()}});return r.a.createElement("div",{className:"App"},t)}}]),t}(r.a.Component));o.a.render(r.a.createElement(d.a,null,r.a.createElement(R,null)),document.getElementById("root"))},62:function(e,t,a){e.exports=a(174)},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.769b2c58.chunk.js.map