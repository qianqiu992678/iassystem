'use strict';

/**
 * Created by Administrator on 2017/5/12.
 */
iasApp.controller('iasCtrl', ['$scope', '$rootScope', '$interval', function ($scope, $rootScope, $interval) {
    console.log('iasCtrl');
    $('.body').on('click', function (e) {
        if (!$(e.target).hasClass('category-item-name')) {
            $('.system-items.active').removeClass('active');
        };
        if (!$(e.target).hasClass('alarm-select-head')) {
            $('.alarm-items.active').removeClass('active');
        };
    });
    $.ajax({
        url: 'app/data/systemCategory.json',
        success: function success(data) {
            $scope.systemCategory = data;
            console.log(data);
        }
    });
    $('.system-category').on('click', '.category-item', function (e) {
        console.log(e.target);
        $('.category-item').children('.active').removeClass('active');
        $(e.target).next().toggleClass('active');
    });
    $('.alarm-select-head').on('click', function (e) {
        $(e.target).next().toggleClass('active');
        console.log(e.target, 123);
    });
    //系统时间设定
    $interval(function () {
        $scope.systemTime = new Date();
    }, 1000);
    //定义路径
    $rootScope.path = [];
    //获取所有舱室信息
    $rootScope.getTankMessage = function () {
        $.ajax({
            url: 'app/data/getTankMessage.php',
            success: function success(data) {
                $rootScope.tankMessage = [];
                $(data).each(function (index, value) {
                    $rootScope.tankMessage[value.tankName] = value;
                });
                console.log('处理后的舱室信息数据为：', $rootScope.tankMessage);
            }
        });
    };
    //获取所有泵浦信息方法
    $rootScope.getPumpMessage = function () {
        $.ajax({
            url: 'app/data/getPumpMessage.php',
            success: function success(data) {
                console.log('接收的泵浦信息数据为33：', data);
                $rootScope.pumpMessage = [];
                $(data).each(function (index, value) {
                    value.isRunning = value.isRunning == 1 ? '#0f0' : '#fff';
                    value.isRemote = value.isRemote == 1 ? '#fff' : '#00f';
                    $rootScope.pumpMessage[value.pumpName] = value;
                });
                console.log('处理后的泵浦信息数据为：', $rootScope.pumpMessage);
            },
            error: function error(data) {
                console.log(data, '接收泵浦信息失败');
            }
        });
    };
    //获取所有报警点信息方法
    $rootScope.getAlarmMessage = function () {
        $.ajax({
            url: 'app/data/getAlarmMessage.php',
            success: function success(data) {
                console.log('接收的报警点信息为：', data);
                $rootScope.alarmMessage = [];
                $(data).each(function (index, value) {
                    $rootScope.alarmMessage[value.alarmName] = value;
                });
                console.log('处理后的报警点信息为：', $rootScope.alarmMessage);
            },
            error: function error(data) {
                console.log('接收报警点信息失败：', data);
            }
        });
    };
    //定义泵启停方法
    $rootScope.pumpIsRunningControl = function (e, isRunning) {

        console.log('接收的参数为：', e.target, isRunning);
        var pumpName = $(e.target).parent().attr('pump-name');
        console.log('发送的参数为：', pumpName, isRunning);
        $.ajax({
            url: 'app/data/pumpIsRunningControl.php?pumpName=' + pumpName + '&isRunning=' + isRunning,
            success: function success(data) {
                console.log(data, 1234);
                $rootScope.getPumpMessage();
            },
            error: function error(data) {
                console.log('泵启停失败：', data);
            }
        });
    };
    //定义调速停方法


    $rootScope.getPumpMessage();
    $rootScope.getTankMessage();
    $rootScope.getAlarmMessage();
}]);