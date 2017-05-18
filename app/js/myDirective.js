'use strict';

/**
 * Created by Administrator on 2017/5/15.
 */
//系统单页顶部标题
iasApp.directive('iasTpl', function () {
    return {
        restrict: 'EA',
        scope: {
            sysName: '@'
        },
        template: '<div><div class="back-ahead"><a href class="back">《</a><a href class="ahead">》</a></div><div class="title-tag">{{sysName}}</div></div> ',
        replace: true
    };
});
//舱室信息
iasApp.directive('iasTankMessage', function () {
    return {
        restrict: 'EAC',
        scope: {
            tankName: '@',
            persent: '@',
            volume: '@',
            quality: '@'
        },
        templateUrl: 'app/templates/directiveTpl/tankMessageTpl.html',
        replace: true
    };
});
//色块指令
iasApp.directive('iasColorBlock', function () {
    return {
        restrict: 'EAC',
        scope: {
            wi: '@',
            he: '@',
            color: '@'
        },
        templateUrl: 'app/templates/directiveTpl/colorBlock.html',
        replace: true
    };
});
//泵浦指令
iasApp.directive('iasPumpBody', function () {
    return {
        restrict: 'EAC',
        scope: {
            size: '@',
            localRemote: '@',
            isRunning: '@'
        },
        templateUrl: 'app/templates/directiveTpl/pumpBody.html',
        replace: true,
        controller: 'pumpControlCtrl'
    };
});
//泵浦弹出控制窗口
iasApp.directive('iasPumpControlPannel', function () {
    return {
        restrict: 'EAC',
        scope: {
            speed: '@'
        },
        templateUrl: 'app/templates/directiveTpl/pumpControlPannel.html',
        replace: true,
        controller: 'pumpControlPannelCtrl'
    };
});
//完整泵浦
iasApp.directive('iasPumpComponent', function () {
    return {
        restrict: 'EAC',
        scope: {},
        templateUrl: 'app/templates/directiveTpl/iasPumpComponent.html',
        replace: true
    };
});