angular.module('Brasserie').controller('BrasserieCtrl', function($scope, BrasserieService){
	$scope.beers = BrasserieService.getBeers();
});