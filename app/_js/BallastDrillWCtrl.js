/**
 * Created by Administrator on 2017/5/13.
 */
define(function(){
    console.log('ballastDrillWCtrl')
    iasApp.controller('BallastDrillWCtrl',['$scope','$rootScope', function ($scope,$rootScope) {
        console.log('BallastDrillWCtrl');
        console.log('在压载单页打印所有舱室信息：',$scope.tankMessage);

    }])
}());
