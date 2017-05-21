'use strict';

/**
 * Created by Administrator on 2017/5/13.
 */
iasApp.controller('BallastDrillWCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
  console.log('BallastDrillWCtrl');
  console.log('在压载单页打印所有舱室信息：', $scope.tankMessage);
}]);
/**
 * Created by Administrator on 2017/5/20.
 */
iasApp.controller('BilgeCtrl',['$scope', function ($scope) {
    console.log('BilgeCtrl')
}])




'use strict';

/**
 * Created by Administrator on 2017/5/18.
 */
iasApp.controller('pumpBodyCtrl', ['$scope', function ($scope) {
    console.log('pumpBodyCtrl');
    $('.pump-body').click(function (e) {
        $(e.target).parents('.pump-component').children('.pump-control-pannel').addClass('active');
    });
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/19.
 */
iasApp.controller('pumpComponentCtrl', ['$scope', function ($scope) {
  console.log('pumpComponentCtrl');
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/18.
 */
iasApp.controller('pumpControlPannelCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    console.log('pumpControlPannelCtrl');
    $('.close').click(function (e) {
        $(e.target).parents('.pump-control-pannel').removeClass('active');
    });
    $('.pump-start-btn').click(function (e) {
        console.log('start pump');
        $rootScope.pumpIsRunningControl(e, 1);
    });
    $('.pump-stop-btn').click(function (e) {
        console.log('stop pump');
        $rootScope.pumpIsRunningControl(e, false);
    });
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
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/21.
 */
iasApp.controller('iasTplCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    console.log('iasTplCtrl');
    $rootScope.$on('$stateChangeStart', function () {
        console.log('state change start', $rootScope.path);
    });
    $rootScope.$on('$stateChangeSuccess', function () {
        console.log(arguments);
        $rootScope.path.push(0);
        console.log('state change success', $rootScope.path);
    });
    $rootScope.$on('$stateChangeError', function () {
        console.log('state change error', $rootScope.path);
    });
    $('.path-back').click(function () {
        console.log('path-back', $rootScope.path);
    });
    $('.path-ahead').click(function () {
        console.log('path-ahead', $rootScope.path);
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
 * Created by Administrator on 2017/5/18.
 */
iasApp.controller('pumpBodyCtrl', ['$scope', function ($scope) {
    console.log('pumpBodyCtrl');
    $('.pump-body').click(function (e) {
        $(e.target).parents('.pump-component').children('.pump-control-pannel').addClass('active');
    });
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/19.
 */
iasApp.controller('pumpComponentCtrl', ['$scope', function ($scope) {
  console.log('pumpComponentCtrl');
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/18.
 */
iasApp.controller('pumpControlCtrl', ['$scope', function ($scope) {
    console.log('pumpControlCtrl');
    $('.pump-body').click(function (e) {
        $(e.target).parents('.pump-component').children('.pump-control-pannel').addClass('active');
    });
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/10.
 */
iasApp.controller('test1Ctrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    console.log('test1Ctrl');
    console.log($rootScope.pumpMessage);
    //console.log('有引号的：',$rootScope.pumpMessage['ballast/drillPum'])
    console.log('有引号的：', $rootScope.pumpMessage['ballastdrillPump'].ratedPower);
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
/**
 * Created by Administrator on 2017/5/15.
 */
"use strict";