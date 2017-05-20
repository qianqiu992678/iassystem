/**
 * Created by Administrator on 2017/5/18.
 */
iasApp.controller('pumpControlPannelCtrl',['$scope','$rootScope', function ($scope,$rootScope) {
    console.log('pumpControlPannelCtrl');
    $('.close').click(function (e) {
        $(e.target).parents('.pump-control-pannel').removeClass('active');
    });
    $('.pump-start-btn').click(function (e) {
        console.log('start pump');
        $rootScope.pumpIsRunningControl(e,1);

    });
    $('.pump-stop-btn').click(function (e) {
        console.log('stop pump');
        $rootScope.pumpIsRunningControl(e,false);
    });
}]);