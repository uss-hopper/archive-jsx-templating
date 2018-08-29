import {Component, OnInit} from "@angular/core";

import {PostService} from "../shared/services/post.service";
import {Post} from "../shared/interfaces/post";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Status} from "../shared/interfaces/status";



@Component({
	template: require("./posts.template.html")
})


export class PostsComponent implements  OnInit{
	posts: Post[] = [];
	postForm : FormGroup;
	status: Status = {status: null, message: null, type: null };

	constructor( protected postService : PostService, protected formBuilder: FormBuilder) {
	}

	ngOnInit(){
		this.loadPosts();
		this.postForm = this.formBuilder.group({
			postContent: ["", [Validators.maxLength(1024), Validators.required]],
			postTitle : ["", [Validators.maxLength(64) , Validators.required]]
		})
	}

	loadPosts() {
		this.postService.getAllPosts().subscribe(posts => this.posts = posts )
	}

	createPost() {
		let post: Post = {postId: null, postContent: this.postForm.value.postContent, postDate: null, postTitle: this.postForm.value.postTitle};

		this.postService.createPost(post).subscribe(status =>{
			this.status = status;
			if(status.status === 200) {
				this.loadPosts()
			}
		});
	}


}