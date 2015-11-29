!function(){"use strict";angular.module("michaMicha",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","angularMoment","restangular","firebase","ui.router","toastr"]).filter("escape",function(){return window.encodeURIComponent})}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Foundation",url:"http://foundation.zurb.com/",description:"The most advanced responsive front-end framework in the world.",logo:"foundation.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("michaMicha").service("webDevTec",e)}(),function(){"use strict";function e(e){function a(a,t,s,i){var r,l=e(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});t.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(e){l.type(e).pause()["delete"]()}),r=a.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(e){l.type(e.login).pause()["delete"]()})}),a.$on("$destroy",function(){r()})}function t(e,a){function t(){return s().then(function(){e.info("Activated Contributors View")})}function s(){return a.getContributors(10).then(function(e){return i.contributors=e,i.contributors})}var i=this;i.contributors=[],t()}var s={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:t,controllerAs:"vm"};return t.$inject=["$log","githubContributor"],s}angular.module("michaMicha").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(){function e(e){var a=this;a.relativeDate=e(a.creationDate).fromNow()}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],a}angular.module("michaMicha").directive("acmeNavbar",e)}(),function(){"use strict";function e(e,a){function t(t){function i(e){return e.data}function r(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return t||(t=30),a.get(s+"/contributors?per_page="+t).then(i)["catch"](r)}var s="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:s,getContributors:t};return i}angular.module("michaMicha").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";function e(e){return new Firebase(e)}function a(e,a,t,s){var i;return function(){if(i)return e.when(i);var a=t(s);if(a.$getAuth())return e.when(i=a.$getAuth());var r=e.defer();return a.$authAnonymously().then(function(e){i=e,r.resolve(e)}),r.promise}}angular.module("michaMicha").service("fbRef",e).service("fbAuth",a),e.$inject=["fbURL"],a.$inject=["$q","$firebase","$firebaseAuth","fbRef"]}(),function(){"use strict";function e(e,a,t){function s(){r(),e(function(){l.classAnimation="rubberBand"},4e3)}function i(){t.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function r(){l.awesomeThings=a.getTec(),angular.forEach(l.awesomeThings,function(e){e.rank=Math.random()})}var l=this;l.awesomeThings=[],l.classAnimation="",l.creationDate=1448757295728,l.showToastr=i,s()}angular.module("michaMicha").controller("MainController",e),e.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function e(e,a,s,i){var r=this,l=i.child("credits").orderByChild("timestamp").limitToLast(25);r.credits_data={},r.credits=s(l),e.log("credits: ",r.credits),r.status=function(e){var t="pending"==e.status?"credits.pending":"credits.status";a.go(t,{id:e.$id})},r.credits.$loaded().then(function(){angular.forEach(r.credits,function(e){r.credits_data[e.$id]=t(i,s,e,{})})})}function a(e,a,s,i,r,l){e.log("ID: ",s.id);var n=this;n.today=new Date;var o=l.child("credits").child(s.id);n.credit=new r(o),n.share_link=a.href("credits.lend",{id:n.credit.$id},{absolute:!0}),e.log("credit: ",n.credit),n.credit.$loaded().then(function(){n.share_body="¿Me apoyas con un crédito para "+n.credit.title+"?\n"+n.share_link;var a=l.child("users").child(n.credit.user);n.requester=new r(a),e.log("requester: ",n.requester),n=t(l,i,n.credit,n)})}function t(e,a,t,s){var i=e.child("transactions").orderByChild("credit").equalTo(t.$id);return s.transactions=a(i),s.stats=function(){var e={lent:{},paid:{}};return e.lent={total:0,count:0},e.paid={total:0,count:0},angular.forEach(s.transactions,function(a){a.user!=t.user?(e.lent.count++,e.lent.total+=a.amount):(e.paid.count++,e.paid.total+=a.amount,e.paid.last={total:a.amount,date:a.timestamp})}),e.lent.left=t.amount/2-e.lent,e.lent.progress=e.lent/(t.amount/2),e.paid.left=1.5*t.amount-e.lent,e.paid.progress=e.lent/(1.5*t.amount),e},s.transactions.$loaded().then(function(){s.lent={total:0,count:0},s.paid={total:0,count:0},angular.forEach(s.transactions,function(e){e.user!=t.user?(s.lent.count++,s.lent.total+=e.amount):(s.paid.count++,s.paid.total+=e.amount,s.paid.last={total:e.amount,date:e.timestamp})}),s.lent.left=t.amount/2-s.lent,s.lent.progress=s.lent/(t.amount/2),s.paid.left=1.5*t.amount-s.lent,s.paid.progress=s.lent/(1.5*t.amount)}),s}angular.module("michaMicha").controller("CreditsController",e).controller("CreditController",a),e.$inject=["$log","$state","$firebaseArray","fbRef"],a.$inject=["$log","$state","$stateParams","$firebaseArray","$firebaseObject","fbRef"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("michaMicha").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e,a){e.state("home",{url:"/",templateUrl:"app/home/home.html"}).state("credits",{"abstract":!0,url:"/credits",template:"<ui-view/>",controller:"CreditsController",controllerAs:"csc"}).state("credits.list",{url:"",templateUrl:"app/credits/list.html"}).state("credits.create",{url:"/create",templateUrl:"app/credits/create.html"}).state("credits.pending",{url:"/:id/pending",templateUrl:"app/credits/pending.html",controller:"CreditController",controllerAs:"cc"}).state("credits.status",{url:"/:id/status",templateUrl:"app/credits/status.html",controller:"CreditController",controllerAs:"cc"}).state("credits.lend",{url:"/:id/lend",templateUrl:"app/credits/lend.html",controller:"CreditController",controllerAs:"cc"}),a.otherwise("/credits")}angular.module("michaMicha").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("michaMicha").constant("malarkey",malarkey).constant("moment",moment).value("fbURL","https://micha-y-micha.firebaseio.com/")}(),function(){"use strict";function e(e,a){e.debugEnabled(!0),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0}angular.module("michaMicha").config(e),e.$inject=["$logProvider","toastrConfig"]}(),angular.module("michaMicha").run(["$templateCache",function(e){e.put("app/home/home.html",'<div class="container"><h1>Home</h1></div>'),e.put("app/credits/create.html",'<div class="container"><div class="row"><div class="large-10 small-12 large-offset-1 columns"><h2>Solicitud de Crédito</h2></div></div><form name="createCredit"><div class="row" ng-show="false"><div class="large-8 small-12 columns"><div class="row"><div class="large-10 small-12 large-centered columns"><div class="row"><h4>Información personal:</h4><hr><div class="large-6 columns"><label>Nombre(s): <input type="text" ng-model="cr.user.first_name" required=""></label></div><div class="large-6 columns"><label>Apellido(s): <input type="text" ng-model="cr.user.last_name" required=""></label></div></div><div class="row"><div class="large-6 columns"><label>Fecha de Nacimiento: <input type="date" ng-model="cr.user.birthday" required=""></label></div><div class="large-6 columns"><label>Estado Civil<select><option value="casado">Casado</option><option value="soltero">Soltero</option><option value="viudo">Viudo</option><option value="libre">Unión Libre</option></select></label></div></div><div class="row"><div class="large-6 columns"><label>Sexo:</label> <input type="radio" name="sexo" value="femenino" id="sexoFemenino"><label for="sexoFemenino">Femenino</label> <input type="radio" name="sexo" value="masculino" id="sexoMasculino"><label for="sexoMasculino">Masculino</label></div><div class="large-6 columns"><label>Teléfono: <input type="text"></label></div></div><h4>Domicilio:</h4><hr><div class="row"><div class="large-12 columns"><label>Dirección: <input type="text"></label></div></div><div class="row"><div class="large-6 columns"><label>Número: <input type="text"></label></div><div class="large-6 columns"><label>Colonia: <input type="text"></label></div></div><div class="row"><div class="large-6 columns"><label>Ciudad: <input type="text"></label></div><div class="large-6 columns"><label>Estado: <input type="text"></label></div></div><a class="expanded button" ng-click="step = 2">Siguiente</a></div></div></div></div><div class="row" ng-show="true"><div class="large-8 small-12 columns"><div class="row"><div class="large-10 small-12 large-centered columns"><div class="row"><div class="large-12 small-12 large-centered columns"><label>Monto Deseado (MXN):</label> <input type="number" placeholder="0.00"></div></div><div class="row"><div class="large-6 small-12 columns"><label>Plazo<select><option value="casado">12 Meses</option><option value="soltero">24 Meses</option><option value="viudo">36 Meses</option><option value="libre">48 Meses</option></select></label></div><div class="large-6 small-12 columns"><label>Destino del Crédito<select><option value="hogar">Hogar</option><option value="auto">Auto</option><option value="compras">Compras</option><option value="vacaciones">Vacaciones</option><option value="negocios">Negocio</option><option value="deuda">Deuda</option></select></label></div></div><h4>Ingresa tus datos de depósito:</h4><hr><div class="row"><div class="large-6 small-12 columns"><label>Bancos<select><option value="bancomer">Bancomer</option><option value="banamex">Banamex</option><option value="hsbc">HSBC</option><option value="santander">Santander</option></select></label></div><div class="large-6 small-12 columns"><label>N&uacute;mero de cuenta: <input type="text"></label></div></div><div class="row"><div class="large-12 columns"><label>Cuenta CLABE <input type="text"></label></div></div><a class="expanded button" href="/#/credits">Siguiente</a></div></div></div><div class="large-4 small-12 columns"></div></div></form></div>'),e.put("app/credits/lend.html",'<div class="container"><div class="row"><div class="large-8 large-offset-2 columns"><center><h2>Necesito <span class="header-money">${{ cc.credit.amount | number:0 }} MXN</span> para<br><span class="header-reason">{{ cc.credit.title }}</span>.</h2><p>Por <a href="#">{{ cc.requester.first_name }} {{ cc.requester.last_name }}</a></p></center></div></div><div class="row"><div class="large-8 columns"><img ng-src="{{ cc.credit.photo_url }}" width="100%"><h5 class="description-name">{{ cc.requester.first_name }}:</h5><p>{{ cc.credit.description }}</p></div><div class="large-4 columns"><div class="sidebar-block"><h4>{{ cc.stats().lent.count }} inversionistas</h4><br><h4 class="amount-remaining">${{ cc.stats().lent.total | number:0 }}</h4><p>de ${{ cc.credit.amount | number:0 }} a juntar</p><h4>{{ cc.credit.expiration_date | amDifference : cc.today : \'days\' }}</h4><p>d&iacute;as para cerrar el plazo</p><div class="success progress" role="progressbar" tabindex="0" ng-attr-aria-valuenow="{{cc.stats().lent.progress*100}}" aria-valuemin="0" ng-attr-aria-valuetext="{{cc.stats().lent.progress*100}} percent" aria-valuemax="100"><div class="progress-meter" ng-style="{width: cc.stats().lent.progress*100 + \'%\'}"></div></div><a class="expanded button cta-button" href="#">INVERTIR</a> <a class="expanded button share-button" href="#">COMPARTIR</a></div></div></div><hr><div class="row"><div class="large-8 large-offset-2 columns"><center><h2>Apoyando a {{ cc.requester.first_name }} en Micha y Micha, tu aportaci&oacute;n se convierte en inversi&oacute;n.</h2><div class="range-slider" data-slider=""><span class="range-slider-handle" role="slider" tabindex="0"></span> <span class="range-slider-active-segment"></span> <input type="hidden"></div></center></div></div><hr><div class="row"><div class="large-8 large-offset-2 columns"><center><h2>Con una aportaci&oacute;n de <span class="header-money">${{ cc.stats().lent.total | number: 0 }} MXN</span> a {{ cc.requester.first_name }}</h2><h4>Recibir&aacute;s <span class="receive-money">${{ cc.stats().lent.total * 0.5 | number: 0 }} MXN</span> de ganancia en 6 meses</h4></center></div></div></div>'),e.put("app/credits/list.html",'<div class="container"><div class="row"><div class="large-10 small-12 large-offset-1 columns"><h2>Créditos</h2></div></div><div class="row" ng-repeat="credit in csc.credits" ng-click="csc.status(credit)"><div ng-if="credit.status == \'pending\'"><div class="row"><div class="large-8 large-offset-2 columns"><center><h3>Recaudar <span class="header-money">${{ credit.amount | number:0 }} MXN</span> para<br><span class="header-reason">{{ credit.title }}</span>.</h3></center></div></div><br><div class="row"><div class="large-8 small-12 large-offset-2 columns"><div class="right"><span class="fulfillment_caption">Cr&eacute;dito por juntar:</span> <span class="amount_fulfilled">${{ credit.amount / 2 | number:0 }} MXN</span></div><div class="success progress" role="progressbar" tabindex="0" ng-attr-aria-valuenow="{{cc.stats().lent.progress*100}}" aria-valuemin="0" ng-attr-aria-valuetext="{{ csc.credits_data[credit.$id].stats().lent.progress*100 }} percent" aria-valuemax="100"><div class="progress-meter" ng-style="{width: csc.credits_data[credit.$id].stats().lent.progress*100 + \'%\'}"></div></div></div></div><div class="row"><div class="large-4 small-12 large-offset-2 columns"><span class="payments_pending">Aportaciones: {{ csc.credits_data[credit.$id].stats().lent.count }}</span></div><div class="large-4 small-12 columns"><span class="monto_cubierto">Monto recaudado: ${{ csc.credits_data[credit.$id].stats().lent.total | number:0 }} MXN</span></div></div></div><div ng-if="credit.status != \'pending\'"><div class="row"><div class="large-8 large-offset-2 columns"><center><h3>Pagar <span class="header-money">${{ credit.amount | number:0 }} MXN</span> por<br><span class="header-reason">{{ credit.title }}</span>.</h3></center></div></div><br><div class="row"><div class="large-8 small-12 large-offset-2 columns"><div class="right"><span class="credit_caption">Cr&eacute;dito por pagar:</span> <span class="credit_amount">${{ credit.amount*1.5 | number:0 }} MXN</span></div><div class="success progress" role="progressbar" tabindex="0" ng-attr-aria-valuenow="{{csc.credits_data[credit.$id].stats().paid.progress*100}}" aria-valuemin="0" ng-attr-aria-valuetext="{{csc.credits_data[credit.$id].stats().paid.progress*100}} percent" aria-valuemax="100"><div class="progress-meter" ng-style="{width: csc.credits_data[credit.$id].stats().paid.progress*100 + \'%\'}"></div></div></div></div><div class="row"><div class="large-4 small-12 large-offset-2 columns"><span class="payments_pending">Pagos Restantes: {{ (credit.months - csc.credits_data[credit.$id].stats().paid.count) }}</span></div><div class="large-4 small-12 columns"><span class="monto_cubierto">Monto Saldado: ${{ csc.credits_data[credit.$id].stats().paid.total | number:0 }} MXN</span></div></div></div><hr></div></div>'),e.put("app/credits/pending.html",'<div class="container"><div class="row"><div class="large-10 small-12 large-offset-1 columns"><h2>Status de Solicitud de Cr&eacute;dito</h2></div></div><br><br><div class="row"><div class="large-8 small-12 large-offset-2 columns"><div class="right"><span class="fulfillment_caption">Monto recaudado:</span> <span class="amount_fulfilled">${{ cc.stats().lent.total | number:0 }} MXN</span></div><div class="success progress" role="progressbar" tabindex="0" ng-attr-aria-valuenow="{{cc.stats().lent.progress*100}}" aria-valuemin="0" ng-attr-aria-valuetext="{{ cc.stats().lent.progress*100 }} percent" aria-valuemax="100"><div class="progress-meter" ng-style="{width: cc.stats().lent.progress*100 + \'%\'}"></div></div></div></div><div class="row"><div class="large-4 small-12 large-offset-2 columns"><span class="payments_pending">D&iacute;as Restantes: {{ cc.credit.expiration_date | amDifference : cc.today : \'days\' }}</span></div><div class="large-4 small-12 columns"><span class="monto_cubierto" style="text-align: right;">Meta: ${{ cc.credit.amount / 2 | number:0 }} MXN</span></div></div><br><hr><br><div class="row"><div class="large-8 small-12 large-offset-2 columns"><center><span class="share-header">COMPARTE TU SOLICITUD</span><br><br><div class="row"><input type="text" ng-value="cc.share_link"></div><div class="row"><div class="large-4 columns"><a class="expanded button" target="_blank" ng-href="https://www.facebook.com/sharer/sharer.php?u={{ cc.share_link | escape }}" style="background-color: #3b5998;">FACEBOOK</a></div><div class="large-4 columns"><a class="expanded button" target="_blank" ng-href="https://twitter.com/home?status={{ cc.share_body | escape }}">TWITTER</a></div><div class="large-4 columns"><a class="expanded button" target="_blank" ng-href="mailto:?subject=%C2%BFMe prestas la mitad%3F&body={{ cc.share_body | escape }}" style="background-color: white; color: #000000; border: 1px solid #ccc;">EMAIL</a></div></div></center></div></div><br><hr><br><div class="row"><div class="large-5 small-12 large-offset-1 columns"><p class="subtitle green">Tu Solicitud caduca el:</p><p>23 de Febrero 2015</p></div><div class="large-5 small-12 columns"><div class="graybox"><div class="row"><div class="large-7 columns"><h5>Inversionistas</h5></div><div class="large-5 columns"><h5>Aportaciones</h5></div></div><hr><div class="row"><div class="large-7 columns"><p>Sofia Rivera</p></div><div class="large-5 columns"><p>$100MXN</p></div></div></div></div></div></div>'),e.put("app/credits/status.html",'<div class="container"><div class="row"><div class="large-10 small-12 large-offset-1 columns"><h2>Status de Cr&eacute;dito</h2></div></div><div class="row"><div class="large-8 large-offset-2 columns"><center><h3>Necesito <span class="header-money">${{ cc.credit.amount | number:0 }} MXN</span> para<br><span class="header-reason">{{ cc.credit.title }}</span>.</h3><p>Por <a href="#">{{ cc.requester.first_name }} {{ cc.requester.last_name }}</a></p></center></div></div><br><div class="row"><div class="large-8 small-12 large-offset-2 columns"><div class="right"><span class="credit_caption">Cr&eacute;dito por pagar:</span> <span class="credit_amount">${{ cc.credit.amount | number:0 }} MXN</span></div><div class="success progress" role="progressbar" tabindex="0" ng-attr-aria-valuenow="{{cc.stats().paid.progress*100}}" aria-valuemin="0" ng-attr-aria-valuetext="{{cc.stats().paid.progress*100}} percent" aria-valuemax="100"><div class="progress-meter" ng-style="{width: cc.stats().paid.progress*100 + \'%\'}"></div></div></div></div><div class="row"><div class="large-4 small-12 large-offset-2 columns"><span class="payments_pending">Pagos Restantes: {{ (cc.credit.months - cc.stats().paid.count) }}</span></div><div class="large-4 small-12 columns"><span class="monto_cubierto">Monto Saldado: ${{ cc.stats().paid.total | number:0 }} MXN</span></div></div><br><br><div class="row"><div class="large-5 small-12 large-offset-1 columns"><h3>Detalles:</h3><hr><div ng-if="cc.stats().paid.total > 0"><p class="subtitle green">&Uacute;ltimo Pago:</p><p>${{ cc.stats().paid.last.total | number: 0}} MXN, {{ cc.stats().paid.last.date }}</p></div><p class="subtitle green">Fecha de Aprobaci&oacute;n de Cr&eacute;dito</p><p>Mi&eacute;, 23 de Diciembre de 2015</p><p class="subtitle green">Plazos</p><p>36 Pagos</p><p class="subtitle green">Tasa de Inter&eacute;s</p><p>24%</p><p class="subtitle green">Fecha de Finalizaci&oacute;n</p><p>23 de Enero de 2017</p></div><div class="large-5 small-12 columns"><div class="graybox"><div class="row"><div class="large-7 columns"><h5>Inversionistas</h5></div><div class="large-5 columns"><h5>Aportaciones</h5></div></div><hr><div class="row"><div class="large-7 columns"><p>Sofia Rivera</p></div><div class="large-5 columns"><p>$100MXN</p></div></div></div></div></div></div>'),e.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="row"><div class="large-12 large-text-center columns"><div class="panel"><h1>\'Allo, \'Allo!</h1><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br><p>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a href="#" class="button success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div></div></div><div class="row"><div class="large-4 columns" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="th"><img class="right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="top-bar row"><ul class="title-area"><li class="name"><h1><a href="https://github.com/Swiip/generator-gulp-angular">Gulp & Angular</a></h1></li></ul><section class="top-bar-section"><ul class="right"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><p class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</p></section></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-b1f3798b88.js.map
