/**
 * Created by Administrator on 2017/6/1.
 */
console.log('requireConfig')
require.config({
    baseUrl:'app/_js',
    paths:{
        'jquery':['https://code.jquery.com/jquery-3.2.1.min','jquery.min'],
        'angular':['angular.js'],
        'angular-ui-router':['angular-ui-router.min'],
        'index':'index',
        'route':'route',
        'BallastDrillWCtrl':'controllers/BallastDrillWCtrl',
        'dirpumpBodyCtrl':'controllers/dirpumpBodyCtrl',
        'dirpumpComponentCtrl':'controllers/dirpumpComponentCtrl',
        'dirpumpControlPannel':'controllers/dirpumpControlPannel',
        'FOCargoCtrl':'controllers/FOCargoCtrl',
        'iasCtrl':'controllers/iasCtrl',
        'PMSControllCtrl':'controllers/PMSControllCtrl',
        'PMSSingleLineCtrl':'controllers/PMSSingleLineCtrl',
        'test1Ctrl':'controllers/test1Ctrl',
        'test2Ctrl':'controllers/test2Ctrl',
        'test3Ctrl':'controllers/test3Ctrl',
        'test4Ctrl':'controllers/test4Ctrl',
        'myDirective':'myDirective'
    }
});
require(['jquery','angular','angularUiRouter'], function (jquery,angular,angularUiRouter) {
    require([
        'index',
        'route',
        'BallastDrillWCtrl',
        'dirpumpBodyCtrl',
        'dirpumpComponentCtrl',
        'dirpumpControlPannel',
        'FOCargoCtrl',
        'iasCtrl',
        'PMSControllCtrl',
        'PMSSingleLineCtrl',
        'test1Ctrl',
        'test2Ctrl',
        'test3Ctrl',
        'test4Ctrl'
    ], function (index,
                 route,
                 BallastDrillWCtrl,
                 dirpumpBodyCtrl,
                 dirpumpComponentCtrl ,
                 dirpumpControlPannel,
                 FOCargoCtrl,
                 iasCtrl,
                 PMSControllCtrl ,
                 PMSSingleLineCtrl ,
                 test1Ctrl,
                 test1Ctrl,
                 test1Ctrl,
                 test1Ctrl) {
        console.log('loading finished')

    })
})