"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{7338:function(e,r,a){a.r(r),a.d(r,{default:function(){return P}});var t=a(7294),s=a(2806),l=a(7462),n=a(4942),i=a(3366),o=a(5697),c=a.n(o),b=a(4184),u=a.n(b),p=a(3663);function d(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?d(Object(a),!0).forEach((function(r){(0,n.Z)(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}var g={children:c().node,bar:c().bool,multi:c().bool,tag:p.iC,value:c().oneOfType([c().string,c().number]),min:c().oneOfType([c().string,c().number]),max:c().oneOfType([c().string,c().number]),animated:c().bool,striped:c().bool,color:c().string,className:c().string,barClassName:c().string,cssModule:c().object,style:c().object,barStyle:c().object,barAriaValueText:c().string,barAriaLabelledBy:c().string},y=function(e){var r=e.children,a=e.className,s=e.barClassName,n=e.cssModule,o=e.value,c=e.min,b=e.max,d=e.animated,g=e.striped,y=e.color,j=e.bar,f=e.multi,h=e.tag,x=e.style,v=e.barStyle,O=e.barAriaValueText,N=e.barAriaLabelledBy,P=(0,i.Z)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"]),w=(0,p.He)(o)/(0,p.He)(b)*100,S=(0,p.mx)(u()(a,"progress"),n),Z={className:(0,p.mx)(u()("progress-bar",j&&a||s,d?"progress-bar-animated":null,y?"bg-"+y:null,g||d?"progress-bar-striped":null),n),style:m(m(m({},j?x:{}),v),{},{width:w+"%"}),role:"progressbar","aria-valuenow":o,"aria-valuemin":c,"aria-valuemax":b,"aria-valuetext":O,"aria-labelledby":N,children:r};return j?t.createElement(h,(0,l.Z)({},P,Z)):t.createElement(h,(0,l.Z)({},P,{style:x,className:S}),f?r:t.createElement("div",Z))};y.propTypes=g,y.defaultProps={tag:"div",value:0,min:0,max:100,style:{},barStyle:{}};var j=y,f=a(8595),h=a(267),x=a(1252),v=a(8367),O=a(9506),N=a(5893),P=function(){return(0,N.jsx)(f.Z,{className:"section section-lg",children:(0,N.jsx)(v.pT,{bottom:!0,duration:1e3,distance:"40px",children:(0,N.jsxs)(h.Z,{children:[(0,N.jsxs)(x.Z,{lg:"6",children:[(0,N.jsx)("h1",{className:"h1",children:"Proficiency"}),s.Bv.map((function(e){return(0,N.jsxs)("div",{className:"progress-info",children:[(0,N.jsx)("div",{className:"progress-label",children:(0,N.jsx)("span",{children:e.Stack})}),(0,N.jsx)("div",{className:"progress-percentage",children:(0,N.jsxs)("span",{children:[e.progressPercentage,"%"]})}),(0,N.jsx)(j,{max:"100",value:e.progressPercentage,color:"info",role:"progressbar","aria-label":e.Stack})]},e.Stack)}))]}),(0,N.jsx)(x.Z,{lg:"6",children:(0,N.jsx)(O.Z,{animationPath:"/lottie/build.json"})})]})})})}}}]);