angular.module('Brasserie').filter('NoteFilter', function(){
	return function(value){
		return value > 3;
	};
});