/* global moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {PanimalService} from './services/panimal/panimal.service';
import {PanimalComponent} from './components/panimal/panimal.component';
import {MainComponent} from './components/main/main.component';

angular.module('pan-front-end', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap'])
	.constant('moment', moment)
	.config(config)
	.config(routerConfig)
	.run(runBlock)
	.service('panimalService', PanimalService)
	.component('panimal', PanimalComponent)
	.component('main', MainComponent)

