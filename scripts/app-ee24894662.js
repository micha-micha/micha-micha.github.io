!function(){"use strict";angular.module("michaMicha",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","restangular","firebase","ui.router","toastr"])}(),function(){"use strict";function e(e){function a(a,t,i,s){var l,o=e(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});t.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(e){o.type(e).pause()["delete"]()}),l=a.$watch("vm.contributors",function(){angular.forEach(s.contributors,function(e){o.type(e.login).pause()["delete"]()})}),a.$on("$destroy",function(){l()})}function t(e,a){function t(){return i().then(function(){e.info("Activated Contributors View")})}function i(){return a.getContributors(10).then(function(e){return s.contributors=e,s.contributors})}var s=this;s.contributors=[],t()}var i={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:t,controllerAs:"vm"};return t.$inject=["$log","githubContributor"],i}angular.module("michaMicha").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(){function e(e){var a=this;a.relativeDate=e(a.creationDate).fromNow()}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],a}angular.module("michaMicha").directive("acmeNavbar",e)}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Foundation",url:"http://foundation.zurb.com/",description:"The most advanced responsive front-end framework in the world.",logo:"foundation.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("michaMicha").service("webDevTec",e)}(),function(){"use strict";function e(e){return new Firebase(e)}function a(e,a,t,i){var s;return function(){if(s)return e.when(s);var a=t(i);if(a.$getAuth())return e.when(s=a.$getAuth());var l=e.defer();return a.$authAnonymously().then(function(e){s=e,l.resolve(e)}),l.promise}}angular.module("michaMicha").service("fbRef",e).service("fbAuth",a),e.$inject=["fbURL"],a.$inject=["$q","$firebase","$firebaseAuth","fbRef"]}(),function(){"use strict";function e(e,a){function t(t){function s(e){return e.data}function l(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return t||(t=30),a.get(i+"/contributors?per_page="+t).then(s)["catch"](l)}var i="https://api.github.com/repos/Swiip/generator-gulp-angular",s={apiHost:i,getContributors:t};return s}angular.module("michaMicha").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";function e(e,a,t){function i(){l(),e(function(){o.classAnimation="rubberBand"},4e3)}function s(){t.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""}function l(){o.awesomeThings=a.getTec(),angular.forEach(o.awesomeThings,function(e){e.rank=Math.random()})}var o=this;o.awesomeThings=[],o.classAnimation="",o.creationDate=1448757295728,o.showToastr=s,i()}angular.module("michaMicha").controller("MainController",e),e.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function e(e,a){var t=this,i=a.child("credits");t.credits=e(i);var s=i.orderByChild("timestamp").limitToLast(25);t.filteredCredits=e(s)}angular.module("michaMicha").controller("CreditsController",e),e.$inject=["$firebaseArray","fbRef"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("michaMicha").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e,a){e.state("home",{url:"/",templateUrl:"app/home/home.html"}).state("credits_list",{url:"/credits/list",templateUrl:"app/credits/list.html",controller:"CreditsController",controllerAs:"credits"}).state("credits_request",{url:"/credits/request",templateUrl:"app/credits/request.html",controller:"CreditsController",controllerAs:"credits"}).state("credits_status",{url:"/credits/status",templateUrl:"app/credits/status.html",controller:"CreditsController",controllerAs:"credits"}).state("credits_lend",{url:"/credits/lend",templateUrl:"app/credits/lend.html",controller:"CreditsController",controllerAs:"credits"}),a.otherwise("/")}angular.module("michaMicha").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("michaMicha").constant("malarkey",malarkey).constant("moment",moment).value("fbURL","https://micha-y-micha.firebaseio.com/")}(),function(){"use strict";function e(e,a){e.debugEnabled(!0),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0}angular.module("michaMicha").config(e),e.$inject=["$logProvider","toastrConfig"]}(),angular.module("michaMicha").run(["$templateCache",function(e){e.put("app/home/home.html",'<div class="container"><h1>Home</h1></div>'),e.put("app/credits/lend.html",'<div class="container"><div class="row"><div class="large-12 small-12 columns"><div class="top-bar"><div class="top-bar-left"><ul class="dropdown menu" data-dropdown-menu=""><li class="menu-text">Site Title</li></ul></div><div class="top-bar-right"><ul class="menu"><li><a href="#">Quiero Prestar</a></li><li><a href="#">Necesito Cr&eacute;dito</a></li></ul></div></div></div></div><div class="row"><div class="large-8 large-offset-2 columns"><center><h2>Mar&iacute;ana necesita <span class="header-money">$20,000MXN</span> para los XV a&ntilde;os de su hija.</h2><p>Por <a href="#">Mariana Lopez</a></p></center></div></div><div class="row"><div class="large-8 columns"><img src="https://placeimg.com/700/480/people" width="100%"><h5 class="description-name">Mariana:</h5><p>La realidad de la economia mundial es que la consideracion a considerar es una posibilidad de alto calibre. Por tanto debemos tener en cuenta lo que no podemos tener en cuenta</p></div><div class="large-4 columns"><div class="sidebar-block"><h4>3 Inversionistas</h4><br><h4 class="amount-remaining">$3,000</h4><p>de $5,000 a juntar</p><h4>24</h4><p>d&iacute;as para cerrar el plazo</p><div class="success progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100"><div class="progress-meter" style="width: 25%"></div></div><a class="expanded button cta-button" href="#">INVERTIR</a> <a class="expanded button share-button" href="#">COMPARTIR</a></div></div></div><hr><div class="row"><div class="large-8 large-offset-2 columns"><center><h2>Apoyando a Mariana en Micha y Micha, tu aportaci&oacute;n se convierte en inversi&oacute;n.</h2><div class="range-slider" data-slider=""><span class="range-slider-handle" role="slider" tabindex="0"></span> <span class="range-slider-active-segment"></span> <input type="hidden"></div></center></div></div><hr><div class="row"><div class="large-8 large-offset-2 columns"><center><h2>Con una aportaci&oacute;n de <span class="header-money">$2,000 MXN</span> a Mar&iacute;ana</h2><h4>Recibir&aacute;s: <span class="receive-money">$2,453 MXN</span> de ganancia en 6 meses</h4></center></div></div></div>'),e.put("app/credits/list.html",'<div class="container"><h1>Créditos</h1><div class="row" ng-repeat="credit in credits.credits"><div class="small-12 large-4 columns">Monto: {{ credit.amount }}</div><div class="small-12 large-4 columns">{{ credit.status }}</div><div class="small-12 large-4 columns">{{ credit.interest_rate }}</div></div></div>'),e.put("app/credits/request.html",'<div class="container"><h1>Solicitud de crédito</h1><div class="row"><div class="small-12 large-4 columns">Información Personal</div><div class="small-12 large-4 columns">2. Fecha de lanzamiento</div><div class="small-12 large-4 columns">3. Fecha de cierre</div></div><div class="row"><div class="large-8 small-12 columns"><div class="row"><div class="large-10 small-12 large-centered columns"><form><div class="row"><div class="large-12 columns"><h4>Información personal:</h4><hr><label>Nombre completo: <input type="text"></label></div></div><div class="row"><div class="large-6 columns"><label>Fecha de Nacimiento: <input type="text"></label></div><div class="large-6 columns"><label>Estado Civil<select><option value="casado">Casado</option><option value="soltero">Soltero</option><option value="viudo">Viudo</option><option value="libre">Unión Libre</option></select></label></div></div><div class="row"><div class="large-6 columns"><label>Sexo:</label> <input type="radio" name="sexo" value="femenino" id="sexoFemenino"><label for="sexoFemenino">Femenino</label> <input type="radio" name="sexo" value="masculino" id="sexoMasculino"><label for="sexoMasculino">Masculino</label></div><div class="large-6 columns"><label>Teléfono: <input type="text"></label></div></div><h4>Domicilio:</h4><hr><div class="row"><div class="large-12 columns"><label>Dirección: <input type="text"></label></div></div><div class="row"><div class="large-6 columns"><label>Número: <input type="text"></label></div><div class="large-6 columns"><label>Colonia: <input type="text"></label></div></div><div class="row"><div class="large-6 columns"><label>Ciudad: <input type="text"></label></div><div class="large-6 columns"><label>Estado: <input type="text"></label></div></div></form><a class="expanded button">Siguiente</a></div></div></div><div class="large-4 small-12 columns">Recuerda no endeudarte mi amigo, es del mal. Recuerda no endeudarte mi amigo, es del mal. Recuerda no endeudarte mi amigo, es del mal. Recuerda no endeudarte mi amigo, es del mal</div></div><div class="row"><div class="large-8 small-12 columns"><div class="row"><div class="large-10 small-12 large-centered columns"><form action=""><div class="row"><div class="large-12 small-12 large-centered columns"><label>Monto Deseado</label> <input type="text" placeholder="$00.00"></div></div><div class="row"><div class="large-6 small-12 columns"><label>Plazo<select><option value="casado">12 Quincenas</option><option value="soltero">24 Quincenas</option><option value="viudo">36 Quincenas</option><option value="libre">48 Quincenas</option></select></label></div><div class="large-6 small-12 columns"><label>Destino del Crédito<select><option value="hogar">Hogar</option><option value="auto">Auto</option><option value="compras">Compras</option><option value="vacaciones">Vacaciones</option><option value="negocios">Negocio</option><option value="deuda">Deuda</option></select></label></div></div><h4>Ingresa tus datos de deposito:</h4><hr><div class="row"><div class="large-6 small-12 columns"><label>Bancos<select><option value="bancomer">Bancomer</option><option value="banamex">Banamex</option><option value="hsbc">HSBC</option><option value="santander">Santander</option></select></label></div><div class="large-6 small-12 columns"><label for="">N&uacute;mero de cuenta: <input type="text"></label></div></div><div class="row"><div class="large-12 columns"><label for="">Cuenta CLABE <input type="text"></label></div></div><a class="expanded button">Siguiente</a></form></div></div></div><div class="large-4 small-12 columns"></div></div></div>'),e.put("app/credits/status.html",'<div class="container"><div class="row"><div class="large-12 small-12 columns"><div class="top-bar"><div class="top-bar-left"><ul class="dropdown menu" data-dropdown-menu=""><li class="menu-text">Site Title</li></ul></div><div class="top-bar-right"><ul class="menu"><li><a href="#">Quiero Prestar</a></li><li><a href="#">Necesito Cr&eacute;dito</a></li></ul></div></div></div></div><div class="row"><div class="large-10 small-12 large-offset-1 columns"><h2>Status de Cr&eacute;dito</h2></div></div><br><div class="row"><div class="large-8 small-12 large-offset-2 columns"><center><h3>Mar&iacute;ana necesita <span class="header-money">$10,000MXN</span> para la fiesta de XV de su hija</h3></center></div></div></div>'),e.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="row"><div class="large-12 large-text-center columns"><div class="panel"><h1>\'Allo, \'Allo!</h1><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br><p>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a href="#" class="button success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div></div></div><div class="row"><div class="large-4 columns" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="th"><img class="right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="top-bar row"><ul class="title-area"><li class="name"><h1><a href="https://github.com/Swiip/generator-gulp-angular">Gulp & Angular</a></h1></li></ul><section class="top-bar-section"><ul class="right"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><p class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</p></section></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-ee24894662.js.map
