import {Component, OnInit} from "@angular/core";
import {PostService} from "../shared/services/post.service";
import {Post} from "../shared/classes/post";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Status} from "../shared/classes/status";

@Component({
	template: require("./posts.template.html")
})
export class PostsComponent implements  OnInit{


	//post state variable
	posts : Post[];

	//Status variable needed for interacting with the API
	status : Status = null;
	kittyForm : FormGroup;

//	status : Status = null;

	constructor(protected postService : PostService, protected formBuilder: FormBuilder ) {

	}

	ngOnInit() {
		this.loadPosts();
		this.kittyForm = this.formBuilder.group({
			postTitle : ["",[Validators.maxLength(64), Validators.required]],
			postContent: ["", [Validators.maxLength(255), Validators.required] ]
		})
	}

	loadPosts() {
		this.postService.getAllPosts().subscribe(posts => this.posts = posts)
	}

	createKittyPost() : void {
		let post = new Post(null,this.kittyForm.value.postContent, null, this.kittyForm.value.postTitle);
		this.postService.createPost(post).subscribe(status => {
			this.status = status;
			if(status.status === 200) {
				this.loadPosts();
				this.kittyForm.reset()
			}
		});
	}

}