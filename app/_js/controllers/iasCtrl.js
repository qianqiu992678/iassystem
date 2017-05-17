/**
 * Created by Administrator on 2017/5/12.
 */
iasApp.controller('iasCtrl',['$scope','$rootScope','$interval',function ($scope,$rootScope,$interval) {
    console.log('iasCtrl');
    $('.body').on('click', function (e) {
        if(!$(e.target).hasClass('category-item-name')){
            $('.system-items.active').removeClass('active')
        };
        if(!$(e.target).hasClass('alarm-select-head')){
            $('.alarm-items.active').removeClass('active')
        };
    });
    $.ajax({
        url:'app/data/systemCategory.json',
        success: function (data) {
            $scope.systemCategory=data;
            console.log(data);
        }
    });
    $('.system-category').on('click','.category-item', function (e) {
        console.log(e.target);
        $('.category-item').children('.active').removeClass('active');
        $(e.target).next().toggleClass('active')
    });
    $('.alarm-select-head').on('click', function (e) {
        $(e.target).next().toggleClass('active');
        console.log(e.target,123)
    });
    //系统时间设定
    $interval(function () {
        $scope.systemTime=new Date();
    },1000);
    //获取所有舱室信息
    $.ajax({
        url:'app/data/getTankMessage.php',
        success: function (data) {
            $rootScope.tankMessage=[];
            $(data).each(function (index,value) {
                $rootScope.tankMessage[value.tankName]=value;
            });
            console.log('接收的数据为：',$rootScope.tankMessage);
        }
    })
}]);