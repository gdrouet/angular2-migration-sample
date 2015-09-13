angular.module('Brasserie').controller('BrasserieCtrl', function(BrasserieService){
	this.beers = BrasserieService.getBeers();
});