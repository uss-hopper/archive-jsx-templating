import {Component, OnInit} from "@angular/core";

import {PostService} from "../shared/services/post.service";
import {Post} from "../shared/interfaces/post";



@Component({
	template: require("./posts.template.html")
})


export class PostsComponent implements  OnInit{
	posts: Post[] = [];

	constructor( protected postService : PostService) {
	}

	ngOnInit(){
		this.loadPosts()
	}

	loadPosts() {
		this.postService.getAllPosts().subscribe(posts => this.posts = posts )
	}
}