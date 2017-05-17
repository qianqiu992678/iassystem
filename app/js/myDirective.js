'use strict';

/**
 * Created by Administrator on 2017/5/15.
 */
iasApp.directive('myTest', function () {
    return {
        restrict: 'EA',
        scope: {
            name: '@',
            amount: '=',
            save: '&'
        },
        template: '<div>' + '{{name}}:<input ng-model="amount" />' + '<button ng-click="save()">save</button>' + '</div>',
        replace: true,
        transclude: false,
        controller: ['$scope', function ($scope) {}],
        link: function link(scope, element, attrs, controller) {}
    };
});