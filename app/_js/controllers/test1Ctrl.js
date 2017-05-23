/**
 * Created by Administrator on 2017/5/10.
 */
iasApp.controller('test1Ctrl',['$scope','$rootScope', function ($scope,$rootScope) {
    console.log('test1Ctrl');
    console.log($rootScope.pumpMessage)
    //console.log('有引号的：',$rootScope.pumpMessage['ballast/drillPum'])
    console.log('有引号的：',$rootScope.pumpMessage['ballastdrillPump'].ratedPower)
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


