import {Component, OnInit} from "@angular/core";
import {PostService} from "../shared/services/post.service";
import {Post} from "../shared/classes/post";

@Component({
	templateUrl: "posts.component.html"
})

export class PostsComponent implements OnInit{
	posts : Post[] = [];
	constructor(private postService: PostService) {}

	ngOnInit(): void {
		this.loadPosts();
	}

	loadPosts() {
		this.postService.getAllPosts().subscribe(reply => this.posts = reply);
	}

}