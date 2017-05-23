/**
 * Created by Administrator on 2017/5/21.
 */
iasApp.controller('iasTplCtrl',['$scope','$rootScope',function ($scope,$rootScope) {
    console.log('iasTplCtrl');
    $rootScope.$on('$stateChangeStart',function () {
        console.log('state change start',$rootScope.path)
    });
    $rootScope.$on('$stateChangeSuccess',function () {
        console.log(arguments)
        $rootScope.path.push(0)
        console.log('state change success',$rootScope.path)
    });
    $rootScope.$on('$stateChangeError',function () {
        console.log('state change error',$rootScope.path)
    });
    $('.path-back').click(function () {
        console.log('path-back',$rootScope.path)
    });
    $('.path-ahead').click(function () {
        console.log('path-ahead',$rootScope.path)
    });
}]);