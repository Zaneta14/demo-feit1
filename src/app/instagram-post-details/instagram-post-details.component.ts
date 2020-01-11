import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InstagramApiService } from '../instagram-api.service';

export interface DialogData {
  clickedpost: Post;
}

@Component({
  selector: 'app-instagram-post-details',
  templateUrl: './instagram-post-details.component.html',
  styleUrls: ['./instagram-post-details.component.css']
})
export class InstagramPostDetailsComponent implements OnInit {

  comments: PostComment[] = [];
  newcomment: PostComment;

  constructor(public dialogRef: MatDialogRef<InstagramPostDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private apiService: InstagramApiService) { 
      this.apiService.getPostComments(this.data.clickedpost.id)
          .subscribe((comments)=>{
            this.comments = comments;
          });

      this.newcomment={ id: this.data.clickedpost.id, time: '2 seconds ago', accountName: 'zaneta_t_', comment: '', photoUrl: 'https://miro.medium.com/max/1200/1*wnZZIbN2yrfapCJ7hDYMEA.png'}
    }

  ngOnInit() {
  }

  oncomment() {
    this.apiService.postComment(this.data.clickedpost.id,this.newcomment)
      .subscribe(()=>{
        console.log("Posted a new comment");
      });

      this.newcomment.comment='';
  }
}