import {Component, OnInit} from "@angular/core";
import {PostService} from "../shared/services/post.service";
import {Post} from "../shared/classes/post";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {repeat} from "rxjs/operators";
import {Status} from "../shared/classes/status";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
	templateUrl: "posts.component.html"
})

export class PostsComponent implements OnInit{
	posts : Post[] = [];
	creatPostForm : FormGroup;
	status: Status = new Status(null, null, null);
	constructor(private postService: PostService, private formBuilder : FormBuilder) {}

	ngOnInit(): void {
		this.creatPostForm = this.formBuilder.group({
			postContent: ["", [Validators.maxLength(1024), Validators.required]],
			postTitle: ["", [Validators.maxLength(64), Validators.required]]
		});
		this.loadPosts();
	}

	loadPosts() {
		this.postService.getAllPosts().subscribe(reply => this.posts = reply);
	}

	createPosts(){
		let post: Post = {postId: null, postContent: this.creatPostForm.value.postContent, postDate: null, postTitle: this.creatPostForm.value.postTitle};
		this.postService.createPost(post).subscribe(reply => {
			this.status = reply;
			if(this.status.status === 200) {
				alert("Yay post created");
				this.loadPosts();
			} else{
				alert("who taught how to type...");
			}
		})
	}

}