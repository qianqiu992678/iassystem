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