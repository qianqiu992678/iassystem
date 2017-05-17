/**
 * Created by Administrator on 2017/5/10.
 */
iasApp.controller('test1Ctrl',['$scope', function ($scope) {
    console.log('test1Ctrl')
}])
    .directive('myDirective', function($rootScope) {
        return {
            priority:1000,
            restrict: 'A',
            replace: true,
            scope: {
                myDirective: '=',
            },
            template: '<p>from myDirective:{{myDirective}}</p>'
        };
    })
    .controller('myController',function($scope){
        $scope.content = 'from controller';
    });


