angular.module('Brasserie')
	.directive('app', function(){
		return {
			restrict: 'E', 
			template: '<main>' +
						'<beer ng-repeat="b in vm.beers" beer="b" ></beer>' +
					  '</main>',
			controllerAs: 'vm', 
			bindToController: true,
			controller: function(BrasserieService){
				this.beers = BrasserieService.getBeers();
			}
		}	
	});