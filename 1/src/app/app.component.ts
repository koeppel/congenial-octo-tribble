import { Component } from '@angular/core';
import { PostJSON } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1';

  page: number = 0;

  postsPerPage: number = 20;

  posts: PostJSON[] = []

  ngOnInit(): void {
	this.fetchPosts();
  }

  fetchPosts(): void {
	// Didn't find docs to only fetch a page - fetching all posts instead
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((json: PostJSON[]) => {
			this.posts = json;
			console.log(this.posts);
		});
  }

  increasePage(): void {
	this.page++;
  }

  decreasePage(): void {
	this.page--;
  }

}
