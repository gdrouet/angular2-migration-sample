export class Beer {
	constructor(public name:string, public note:number, public description:string){ }
}


export class BrasserieService {
	getBeers():Beer[]{
		return [
			{name:'Heinekken', note: 0, description:'Petite Description...'},
			{name:'Leffe', note: 2.5, description:'Petite Description...'},
			{name:'Chouffe', note: 4, description:'Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...'},
			{name:'Cuvée des Jonquilles', note: 4.5, description:'Petite Description...'},
			{name:'Moinette', note: 4, description:'Petite Description...'},
			{name:'Saint Feuillin', note: 4, description:'Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...'}
		];
	}
	
	getOnePinte(beer:Beer){
		alert('La pinte de ' + beer.name + ' est bientôt prête !');
	}
}