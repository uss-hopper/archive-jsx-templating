import {Component, OnInit} from "@angular/core";
import {Status} from "./shared/interfaces/status";
import {SessionService} from "./shared/services/session.service";

@Component({
	selector: "data-design-app",
	template: require("./app.component.html")
})
export class AppComponent{

	constructor() {
	}
}