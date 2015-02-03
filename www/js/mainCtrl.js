var app = angular.module("kenGarff");

app.controller('mainCtrl', function($scope, mainService, $auth){


	$scope.kenGarffRequest = function(){
		
		mainService.getKenGarff().then(function(reviews){
			console.log(reviews);
			var hoy = new Date();
			var weekAgo = hoy.setDate(hoy.getDate() - 7);
			$scope.reviews = reviews.reviews;
			$scope.lastWeek = 0;
			for (var i = 0; i < $scope.reviews.length; i++) {
				var postTime = $scope.reviews[i].publishDate;
				var reviewTimestamp = new Date(postTime);
				if (reviewTimestamp >= weekAgo){
					$scope.lastWeek = $scope.lastWeek + 1;
				}
			};
			console.log($scope.lastWeek);
		})
		mainService.getStats().then(function(stats){
			// console.log(stats);
			$scope.averageRating = stats.over_all_rating;
			$scope.stats = stats.location;
		})

	}

})