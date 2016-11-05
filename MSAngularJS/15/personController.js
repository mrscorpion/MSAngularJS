/**
 * Created by qingfeng on 2016/11/5.
 */
angular.module('myApp', []).controller('personCtrl', function($scope) {
    $scope.firstName = "Hello",
        $scope.lastName = "AngularJS",
        $scope.fullName = function() {
            return $scope.firstName + " " + $scope.lastName;
        }
});