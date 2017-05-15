'use strict';

/**
 * Created by Administrator on 2017/5/13.
 */
iasApp.controller('BallastDrillWCtrl', ['$scope', function ($scope) {
  console.log('BallastDrillWCtrl');
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/12.
 */
iasApp.controller('iasCtrl', ['$scope', '$interval', function ($scope, $interval) {
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
    $interval(function () {
        $scope.systemTime = new Date();
    }, 1000);
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
}]);
'use strict';

/**
 * Created by Administrator on 2017/5/11.
 */
iasApp.controller('test2Ctrl', ['$scope', function ($scope) {
  console.log('test2Ctrl');
}]);