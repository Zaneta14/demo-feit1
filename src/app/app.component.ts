import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InstagramPostDetailsComponent } from './instagram-post-details/instagram-post-details.component';
import { InstagramApiService } from './instagram-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feit-instagram-app';

  posts: Post[] = [];

  constructor(public dialog: MatDialog, private apiService: InstagramApiService) {
    this.apiService.getPosts().subscribe((receivedPosts)=>{
      this.posts = receivedPosts;
    });
  }  

  onclick(post: Post) {
    const dialogRef = this.dialog.open(InstagramPostDetailsComponent, {
      width: '750px',
      height: '700px',
      data: {clickedpost : post}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}