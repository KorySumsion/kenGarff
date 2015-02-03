angular.module('kenGarff')
    .directive('navBar', function () {
    return {
        restrict: 'E',          
        templateUrl: '../templates/navBar.html',
        controller: 'mainCtrl',
        link: function ($scope, element, attrs) { } //DOM manipulation
    }
});