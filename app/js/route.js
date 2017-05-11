'use strict';

/**
 * Created by Administrator on 2017/5/10.
 */
//import test1Url from '../templates/test/test1.html';
console.log('routejs');
var iasApp = angular.module('iasApp', ['ng', 'ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('test', {
        url: '/test',
        template: '<div>test</div><div ui-view></div>'
    }).state('test.test1', {
        url: '/test1',
        templateUrl: 'app/templates/test/test1.html',
        controller: 'test1Ctrl'
    }).state('test.test2', {
        url: '/test2',
        templateUrl: 'app/templates/test/test2.html',
        controller: 'test2Ctrl'
    });
}]);