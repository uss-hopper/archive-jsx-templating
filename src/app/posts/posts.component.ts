import {Component} from "@angular/core";
import {PostService} from "../shared/services/post.service";



@Component({
	template: require("./posts.template.html")
})
export class PostsComponent{
	constructor( protected postService : PostService) {
	}
}