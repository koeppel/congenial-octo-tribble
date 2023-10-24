import { Component, Input } from '@angular/core';
import { CommentJSON } from '../comment/comment.component';

export interface PostJSON {
	userId: number,
	id: number,
	title: string,
	body: string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
	@Input({required: true}) id!: number;

	@Input({required: true}) titleText!: string;

	@Input({required: true}) bodyText!: string;

	comments: CommentJSON[] = [];

	ngOnInit(): void {
		this.fetchComments();
	}

	fetchComments(): void {
		fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`)
		.then((response) => response.json())
		.then((json: CommentJSON[]) => this.comments = json);
	}
}