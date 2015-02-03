angular.module('kenGarff')
    .directive('reviewStars', function () {
    return {
        restrict: 'E',
        template : 
                   "  <span ng-repeat='starPath in starPaths track by $index'>" +
                   "    <img src={{starPath}}>" + 
                   "  </span>",         
        scope: {
            ratingValue: '=',
            max: '=',
        },
        link: function (scope, element, attrs) {

            scope.starPaths = [];
            var updateStars = function() {

                for ( var i = 0; i < scope.max; i++) {
                    if(i !== scope.ratingValue){
                        scope.starPaths.push('../img/star-on.png');
                    } else {
                        scope.starPaths.push('../img/star-off.png');
                        scope.ratingValue = scope.ratingValue + 1;
                    }                   
                }

            };
            updateStars();           
        } 
    }
});
