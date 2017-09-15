export function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('main', {
			url         : '/',
			abstract    : true,
			template    : '<main></main>'
		})
		.state('main.panimals', {
			url         : '',
			template    : '<panimal></panimal>'
		});

	$urlRouterProvider.otherwise('/');
}
