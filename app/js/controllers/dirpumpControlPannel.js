'use strict';

/**
 * Created by Administrator on 2017/5/18.
 */
iasApp.controller('pumpControlPannelCtrl', ['$scope', function ($scope) {
    console.log('pumpControlPannelCtrl');
    $('.close').click(function (e) {
        console.log($(e.target).parents('.pump-control-pannel'));
        $(e.target).parents('.pump-control-pannel').removeClass('active');
    });
}]);