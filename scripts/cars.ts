///<reference path='lib/jquery.d.ts'/>
class Ferrari {
	constructor(element:JQuery) {
		$(element).click({sound: 'meep meep'}, this.honk);
	}

	honk(event:any):void {
		console.log(event.data.sound);
	}
}

new Ferrari($('img'));

