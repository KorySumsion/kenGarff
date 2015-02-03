var app = angular.module("kenGarff");

app.service('mainService', function($http){

	this.getKenGarff = function(){
		return $http({
			method: 'GET',
			url: 'http://secure.reviewtrackers.com/api/locations/19747/reviews?api_token=274b859d23b5e2778b46&order=desc'
		}).then(function(res){
			return res.data;
		})
	}

	this.getStats = function(){
		return $http({
			method: 'GET',
			url: 'http://secure.reviewtrackers.com/api/locations/19747?api_token=274b859d23b5e2778b46'
		}).then(function(res){
			return res.data;
		})
	}

})