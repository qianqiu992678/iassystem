/**
 * Created by Administrator on 2017/5/18.
 */
iasApp.controller('pumpBodyCtrl',['$scope', function ($scope) {
    console.log('pumpBodyCtrl');
    $('.pump-body').click(function (e) {
        $(e.target).parents('.pump-component').children('.pump-control-pannel').addClass('active')
    })
}]);