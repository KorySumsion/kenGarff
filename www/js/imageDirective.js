angular.module('kenGarff')
    .directive('imageDirective', function () {
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment         
        template:
                "  <span>" +
                "  <img src={{logo}}>" + 
                "  </span>",
        scope: {
            onlineReview: '@'

        },
        link: function (scope, element, attrs) {

            console.log(scope.onlineReview)
           
                if(/apartmentratings\.com/.test(scope.onlineReview)){
                    scope.logo = "../img/apartment-ratings.png";
                    console.log(scope.logo)
                }
            
        }
    }
});