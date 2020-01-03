require.config({
	paths: {
		'jquery': '../lib/jquery/dist/jquery',
		'angular': '../lib/angular/angular',
		'angular.route': '../lib/angular-route/angular-route',
		'angular.animate': '../lib/angular-animate/angular-animate',
        'angular.resource': '../lib/angular-resource/angular-resource',
		'phoneDetail': '../phone-detail/phone-detail.component',
		'phoneList' : '../phone-list/phone-list.component',
		'phonecatAnimations': 'app.animations',
		'phoneService': '../core/phone/phone.service',
		'checkmark.filter': '../core/checkmark/checkmark.filter'
	},
	
	shim: {
		'angular': {
			deps: ['jquery'],
			exports: 'angular'
		},		
		'angular.route': ['angular'],
		'angular.animate': ['angular'],
		'angular.resource' : ['angular'],
		'phonecatAnimations': ['angular.animate']//,		
		
		//'phonecatControllers': ['angular']
		//,'phonecatFilters': ['angular']
		,'phonecatServices': ['angular.resource']
	}
});


require(['angular', 'app', 'appConfig'], function(angular, app, appConfig){
	angular.bootstrap(document, ['phonecatApp']);
});