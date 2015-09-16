/// <reference path="../typings/angular2/angular2.d.ts" />

import {View, Component} from "angular2/angular2";
import {NoteFilter} from "./NoteFilter";
import {Beer, BrasserieService} from "./BrasserieService";

@Component({
	selector: 'beer-item', 
	properties: ['beer']
})
@View({
	pipes: [NoteFilter],
	template: `<div class="col-md-4 panel panel-default">
					<div class="panel-heading">
						<span [class]="beer.note | NoteFilter"></span>{{beer.name}}</div>
						<div class="panel-body">
							{{beer.description}}
						</div>
						<button (click)="selectBeer()" class="btn btn-primary">Give me a pinte !</button>
					</div>`
})
export class BeerComp {
	beer: Beer;
	
	constructor(public brasserieService:BrasserieService){}
	
	selectBeer(){
		this.brasserieService.getOnePinte(this.beer);
	}
}