'use strict';

/**
 * Created by Administrator on 2017/5/13.
 */
iasApp.controller('BallastDrillWCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  console.log('BallastDrillWCtrl');
  console.log('在压载单页打印所有舱室信息：', $scope.tankMessage);
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/17.
 */
iasApp.controller('FOCargoCtrl', ['$scope', function ($scope) {
  console.log('FOCargoCtrl');
}]);
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
    //获取所有舱室信息
    $.ajax({
        url: 'app/data/getTankMessage.php',
        success: function success(data) {
            $rootScope.tankMessage = [];
            $(data).each(function (index, value) {
                $rootScope.tankMessage[value.tankName] = value;
            });
            console.log('接收的数据为：', $rootScope.tankMessage);
        }
    });
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/13.
 */
iasApp.controller('PMSControllCtrl', ['$scope', function ($scope) {
  console.log('PMSControllCtrl');
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/13.
 */
iasApp.controller('PMSSingleLineCtrl', ['$scope', function ($scope) {
  console.log('PMSSingleLineCtrl');
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/10.
 */
iasApp.controller('test1Ctrl', ['$scope', function ($scope) {
    console.log('test1Ctrl');
    $('.pump-start-btn').click(function (e) {
        $(e.target).parents('.pump-controll-pannel').prev().children('.pump-body').attr('fill', 'green');
    });
    $('.pump-stop-btn').click(function (e) {
        $(e.target).parents('.pump-controll-pannel').prev().children('.pump-body').attr('fill', 'white');
    });
    $('.pump').click(function (e) {
        $(e.target).parent().next().addClass('active');
    });
    $('.close').click(function (e) {
        console.log('close');
        console.log($(e.target).parents('.pump-controll-pannel'));
        $(e.target).parents('.pump-controll-pannel').removeClass('active');
    });
}]).directive('myDirective', function ($rootScope) {
    return {
        priority: 1000,
        restrict: 'A',
        replace: true,
        scope: {
            myDirective: '='
        },
        template: '<p>from myDirective:{{myDirective}}</p>'
    };
}).controller('myController', function ($scope) {
    $scope.content = 'from controller';
});
'use strict';

/**
 * Created by Administrator on 2017/5/11.
 */
iasApp.controller('test2Ctrl', ['$scope', function ($scope) {
  console.log('test2Ctrl');
}]);
/**
 * Created by Administrator on 2017/5/15.
 */
"use strict";