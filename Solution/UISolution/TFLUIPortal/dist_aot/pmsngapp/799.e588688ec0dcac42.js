"use strict";(self.webpackChunkPMSNGApp=self.webpackChunkPMSNGApp||[]).push([[799],{799:(A,r,o)=>{o.r(r),o.d(r,{EmployeeModule:()=>j});var c=o(6895),a=o(433),h=o(4466),n=o(1661),e=o(8256);let d=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["EmployeeContainer"]],decls:1,vars:0,template:function(s,m){1&s&&e._UZ(0,"router-outlet")},dependencies:[n.lC],encapsulation:2})}return t})();var f=o(1051),v=o(1005);function b(t,g){if(1&t&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&t){const i=g.$implicit;e.xp6(2),e.hij("FullName : ",i.fullName,""),e.xp6(2),e.hij("Role: ",i.title,"")}}const y=[{path:"",component:d},{path:"members",component:(()=>{class t{constructor(i,s){this.projectSvc=i,this.membershipSvc=s,this.projectId=4,this.members=[]}ngOnInit(){this.projectSvc.getAllProjectMembers(this.projectId).subscribe(i=>{this.members=i;let m=this.members.map(l=>l.employeeId).join(",");this.membershipSvc.getUserDetails(m).subscribe(l=>{this.members.forEach(p=>{let u=l.find(M=>M.id===p.employeeId);null!=u&&(p.fullName=u.fullName)})})})}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(f.Y),e.Y36(v.v))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["member-list"]],decls:3,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(s,m){1&s&&(e.TgZ(0,"h2"),e._uU(1,"Project Members"),e.qZA(),e.YNc(2,b,5,2,"div",0)),2&s&&(e.xp6(2),e.Q6J("ngForOf",m.members))},dependencies:[c.sg],encapsulation:2})}return t})()}];let j=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[c.ez,n.Bz,a.UX,h.m,a.u5,n.Bz.forChild(y)]})}return t})()}}]);