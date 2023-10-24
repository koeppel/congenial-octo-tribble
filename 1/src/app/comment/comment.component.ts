import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
	@Input({required: true}) id!: number;

	@Input({required: true}) name!: string;

	@Input({required: true}) email!: string;

	@Input({required: true}) body!: string;
}

export interface CommentJSON {
	postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}