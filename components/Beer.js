angular.module('Brasserie').directive('beer', function(BrasserieService){
	return {
		restrict: 'E',
		scope: {
			beer: '='
		}, 
		template: '<div class="col-md-4 panel panel-default">' +
					'<div class="panel-heading">' +
						'<span ng-class="{\'glyphicon glyphicon-heart\': {{beer.note | NoteFilter}} }"></span>{{beer.name}}</div>' +
						'<div class="panel-body">' +
							'{{beer.description}}' +
						'</div>' +
						'<button ng-click="selectBeer()" class="btn btn-primary">Give me a pinte !</button>' +
					'</div>',
		link: function($scope){
			$scope.selectBeer = function(){
				BrasserieService.getOnePinte($scope.beer);
			};
		}
	};
});