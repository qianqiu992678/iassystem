'use strict';

/**
 * Created by Administrator on 2017/5/10.
 */
iasApp.controller('test1Ctrl', ['$scope', function ($scope) {
    console.log('test1Ctrl');
    $('.pump-start-btn').click(function (e) {
        $(e.target).parents('.pump-controll-pannel').prev().children('.pump-body').attr('fill', 'green');
    });
    $('.pump-stop-btn').click(function (e) {
        $(e.target).parents('.pump-controll-pannel').prev().children('.pump-body').attr('fill', 'white');
    });
    $('.pump').click(function (e) {
        $(e.target).parent().next().addClass('active');
    });
    $('.close').click(function (e) {
        console.log('close');
        console.log($(e.target).parents('.pump-controll-pannel'));
        $(e.target).parents('.pump-controll-pannel').removeClass('active');
    });
}]).directive('myDirective', function ($rootScope) {
    return {
        priority: 1000,
        restrict: 'A',
        replace: true,
        scope: {
            myDirective: '='
        },
        template: '<p>from myDirective:{{myDirective}}</p>'
    };
}).controller('myController', function ($scope) {
    $scope.content = 'from controller';
});