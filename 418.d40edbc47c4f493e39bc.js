(self.webpackChunksocial_post_app=self.webpackChunksocial_post_app||[]).push([[418],{4418:(t,e,r)=>{"use strict";r.r(e),r.d(e,{AuthModule:()=>m});var n=r(8583),o=r(7389),i=r(7716),a=r(9001),s=r(8295),u=r(9983),c=r(1095);let Z=(()=>{class t{constructor(t){this.authService=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(a.e))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-forgot-password"]],decls:19,vars:0,consts:[[1,"authBlock"],[1,"text-center"],[1,"formGroup"],["appearance","fill",1,"example-full-width"],["matInput","","type","email","placeholder","Email Address","required",""],["passwordResetEmail",""],["mat-stroked-button","",3,"click"],[1,"redirectToLogin"],["mat-button","","color","primary","routerLink","/sign-in"]],template:function(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",0),i.TgZ(1,"h3"),i._uU(2,"Reset Password"),i.qZA(),i.TgZ(3,"p",1),i._uU(4,"Please enter your email address to request a password reset."),i.qZA(),i.TgZ(5,"div",2),i.TgZ(6,"mat-form-field",3),i.TgZ(7,"mat-label"),i._uU(8,"Email Address"),i.qZA(),i._UZ(9,"input",4,5),i.qZA(),i.qZA(),i.TgZ(11,"div",2),i.TgZ(12,"button",6),i.NdJ("click",function(){i.CHM(t);const r=i.MAs(10);return e.authService.ForgotPassword(r.value)}),i._uU(13,"Reset Password"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(14,"div",7),i.TgZ(15,"span"),i._uU(16,"Go back to ? "),i.TgZ(17,"button",8),i._uU(18,"Log In"),i.qZA(),i.qZA(),i.qZA()}},directives:[s.KE,s.hX,u.Nt,c.lW,o.rH],styles:[""]}),t})();function l(t,e){if(1&t&&(i.TgZ(0,"div",2),i.TgZ(1,"p",6),i._uU(2," We have sent a confirmation email to "),i.TgZ(3,"strong"),i._uU(4),i.qZA(),i._uU(5,". "),i.qZA(),i.TgZ(6,"p",6),i._uU(7,"Please check your email and click on the link to verfiy your email address."),i.qZA(),i.qZA()),2&t){const t=e.ngIf;i.xp6(4),i.Oqu(t.email)}}const p=[{path:"",component:(()=>{class t{constructor(t){this.authService=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(a.e))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-sign-in"]],decls:33,vars:0,consts:[[1,"authBlock"],[1,"formGroup"],["appearance","fill",1,"example-full-width"],["matInput","","placeholder","Username","required",""],["userName",""],["matInput","","type","password","placeholder","Password","required",""],["userPassword",""],["mat-stroked-button","",3,"click"],[1,"or"],[1,"orInner"],[1,"forgotPassword"],["mat-button","","color","primary","routerLink","/sign-in/forgot-password"],[1,"redirectToLogin"],["mat-button","","color","primary","routerLink","/sign-in/registration"]],template:function(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",0),i.TgZ(1,"h3"),i._uU(2,"Sign In"),i.qZA(),i.TgZ(3,"div",1),i.TgZ(4,"mat-form-field",2),i.TgZ(5,"mat-label"),i._uU(6,"Username"),i.qZA(),i._UZ(7,"input",3,4),i.qZA(),i.qZA(),i.TgZ(9,"div",1),i.TgZ(10,"mat-form-field",2),i.TgZ(11,"mat-label"),i._uU(12,"Password"),i.qZA(),i._UZ(13,"input",5,6),i.qZA(),i.qZA(),i.TgZ(15,"div",1),i.TgZ(16,"button",7),i.NdJ("click",function(){i.CHM(t);const r=i.MAs(8),n=i.MAs(14);return e.authService.SignIn(r.value,n.value)}),i._uU(17,"Log in"),i.qZA(),i.qZA(),i.TgZ(18,"div",1),i.TgZ(19,"span",8),i.TgZ(20,"span",9),i._uU(21,"Or"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(22,"div",1),i.TgZ(23,"button",7),i.NdJ("click",function(){return e.authService.GoogleAuth()}),i._uU(24,"Log in with Google"),i.qZA(),i.qZA(),i.TgZ(25,"div",10),i.TgZ(26,"button",11),i._uU(27,"Forgot Password?"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(28,"div",12),i.TgZ(29,"span"),i._uU(30,"Don't have an account?"),i.TgZ(31,"button",13),i._uU(32," Sign Up"),i.qZA(),i.qZA(),i.qZA()}},directives:[s.KE,s.hX,u.Nt,c.lW,o.rH],styles:[""]}),t})()},{path:"registration",component:(()=>{class t{constructor(t){this.authService=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(a.e))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-sign-up"]],decls:30,vars:0,consts:[[1,"authBlock"],[1,"formGroup"],["appearance","fill",1,"example-full-width"],["matInput","","type","email","placeholder","Email Address","required",""],["userEmail",""],["matInput","","type","password","placeholder","Password","required",""],["userPwd",""],["mat-stroked-button","",3,"click"],[1,"or"],[1,"orInner"],[1,"redirectToLogin"],["mat-button","","color","primary","routerLink","/sign-in"]],template:function(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",0),i.TgZ(1,"h3"),i._uU(2,"Sign Up"),i.qZA(),i.TgZ(3,"div",1),i.TgZ(4,"mat-form-field",2),i.TgZ(5,"mat-label"),i._uU(6,"Email Address"),i.qZA(),i._UZ(7,"input",3,4),i.qZA(),i.qZA(),i.TgZ(9,"div",1),i.TgZ(10,"mat-form-field",2),i.TgZ(11,"mat-label"),i._uU(12,"Password"),i.qZA(),i._UZ(13,"input",5,6),i.qZA(),i.qZA(),i.TgZ(15,"div",1),i.TgZ(16,"button",7),i.NdJ("click",function(){i.CHM(t);const r=i.MAs(8),n=i.MAs(14);return e.authService.SignUp(r.value,n.value)}),i._uU(17,"Sign Up"),i.qZA(),i.qZA(),i.TgZ(18,"div",1),i.TgZ(19,"span",8),i.TgZ(20,"span",9),i._uU(21,"Or"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(22,"div",1),i.TgZ(23,"button",7),i.NdJ("click",function(){return e.authService.GoogleAuth()}),i._uU(24,"Continue with Google"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(25,"div",10),i.TgZ(26,"span"),i._uU(27,"Already have an account? "),i.TgZ(28,"button",11),i._uU(29,"Log In"),i.qZA(),i.qZA(),i.qZA()}},directives:[s.KE,s.hX,u.Nt,c.lW,o.rH],styles:[""]}),t})()},{path:"forgot-password",component:Z},{path:"verify",component:(()=>{class t{constructor(t){this.authService=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(a.e))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-verify-email"]],decls:12,vars:1,consts:[[1,"authBlock"],["class","formGroup",4,"ngIf"],[1,"formGroup"],["mat-button","",3,"click"],[1,"redirectToLogin"],["mat-button","","routerLink","/sign-in"],[1,"text-center"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"h3"),i._uU(2,"Thank You for Registering"),i.qZA(),i.YNc(3,l,8,1,"div",1),i.TgZ(4,"div",2),i.TgZ(5,"button",3),i.NdJ("click",function(){return e.authService.SendVerificationMail()}),i._uU(6,"Resend Verification Email"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"div",4),i.TgZ(8,"span"),i._uU(9,"Go back to?"),i.TgZ(10,"button",5),i._uU(11," Sign in"),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(3),i.Q6J("ngIf",e.authService.userData))},directives:[n.O5,c.lW,o.rH],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.Bz.forChild(p)],o.Bz]}),t})();var d=r(3354);let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[n.ez,g,d.m]]}),t})()}}]);