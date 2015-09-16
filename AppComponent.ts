/// <reference path="typings/angular2/angular2.d.ts" />

import {bootstrap, View, Component, NgFor} from "angular2/angular2";
import {Beer, BrasserieService} from "./components/BrasserieService"
import {BeerComp} from "./components/BeerComp";

@Component({
	selector: 'app'
})
@View({
	template: `<main>
					<beer-item *ng-for="#b of beers" [beer]="b"></beer-item>
				</main>`,
	directives: [BeerComp, NgFor]
})
class App {
	beers:Beer[];
	constructor(public brasserieService:BrasserieService){
		this.beers = brasserieService.getBeers();
		console.log(this.beers)
	}
}
bootstrap(App, [BrasserieService])