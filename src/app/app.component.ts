import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InstagramApiService } from './instagram-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feit-instagram-app';

  posts: Post[] = [];

  pageNumber: number=1;

  constructor(public dialog: MatDialog, private apiService: InstagramApiService) {
    this.getPosts();
  }  

  onNext(){
    this.pageNumber++;
    this.getPosts();
  }

  onPrev(){
    this.pageNumber--;
    this.getPosts();
  }

  getPosts(){
    this.apiService.getPosts(this.pageNumber).subscribe((receivedPosts)=>{
      this.posts = receivedPosts;
    });
  }

}
