angular.module('Brasserie').directive('beer', function(BrasserieService){
	return {
		restrict: 'E',
		scope: {
			beer: '='
		}, 
		template: '<div class="col-md-4 panel panel-default">' +
					'<div class="panel-heading">' +
						'<span ng-class="{\'glyphicon glyphicon-heart\': {{vm.beer.note | NoteFilter}} }"></span>{{vm.beer.name}}</div>' +
						'<div class="panel-body">' +
							'{{vm.beer.description}}' +
						'</div>' +
						'<button ng-click="selectBeer()" class="btn btn-primary">Give me a pinte !</button>' +
					'</div>',
		controllerAs: 'vm',
		bindToController: true,
		controller: function(){
			this.selectBeer = function(){
				BrasserieService.getOnePinte($scope.beer);
			};
		}
	};
});