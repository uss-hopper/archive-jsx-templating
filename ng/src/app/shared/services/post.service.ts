import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Post} from "../classes/post";
import {Status} from "../classes/status";
import {Observable} from "rxjs";

@Injectable()
export class PostService {
	constructor(protected http: HttpClient) {
	}

	private postUrl = "apis/post/";

	getAllPosts() : Observable<Post[]> {
		return(this.http.get<Post[]>(this.postUrl));
	}

	getPostByPostId(postId : number) : Observable<Post> {
		return(this.http.get<Post>(this.postUrl +postId));
	}

	createPost(post : Post) : Observable<Status> {
		return(this.http.post<Status>(this.postUrl, post)
			);
	}
}