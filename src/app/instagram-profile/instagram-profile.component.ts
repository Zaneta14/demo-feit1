import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InstagramApiService } from '../instagram-api.service';

export interface DialogData {
  clickedpost: Post;
}

@Component({
  selector: 'app-instagram-profile',
  templateUrl: './instagram-profile.component.html',
  styleUrls: ['./instagram-profile.component.css']
})
export class InstagramProfileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InstagramProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private apiService: InstagramApiService){}

  post: Post=this.data.clickedpost;

  count(p: Post) {
    for (var i=1; i<p.pictures.length; i++)
    {}
    return i;
  }

  ngOnInit() {
  }

  onFollow() {
    if (this.post.isFollowed == false) {
      this.post.followers++;
      this.post.isFollowed=true;
      this.post.follow='https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/82343959_2621049961314506_4521470943339479040_n.jpg?_nc_cat=106&_nc_ohc=EofkXZu9brEAQmb930X5p66kntwW84bAwdOGZlxeqRALy9HwnahqL-HIw&_nc_ht=scontent-vie1-1.xx&oh=bb48ff81404c03b7c20849d101f074b4&oe=5EA5E528';
    }
    else {
      this.post.followers--;
      this.post.isFollowed=false;
      this.post.follow='https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/cp0/82006978_2621049954647840_7398970496173211648_n.jpg?_nc_cat=108&_nc_ohc=TgZkjSQS8MEAQkKf8oPNVDEvYjPIs-Cx-R-HPePW82K_I3QtyAHJ6QcEw&_nc_ht=scontent-vie1-1.xx&oh=484f8a7b87ee1c47b1f99d4c09b71f41&oe=5E986D53';
    }
    this.updatepost();
  }

  updatepost() {
    var post={
      "id": this.post.id,
      "headerUrl": this.post.headerUrl,
      "name": this.post.name,
      "location": this.post.location,
      "longDescription": this.post.longDescription,
      "pictureUrl": this.post.pictureUrl,
      "likes": this.post.likes,
      "isLiked": this.post.isLiked,
      "button": this.post.button,
      "isSaved": this.post.isSaved,
      "savebutton": this.post.savebutton,
      "followers": this.post.followers,
      "following": this.post.following,
      "pictures": this.post.pictures,
      "follow": this.post.follow,
      "isFollowed": this.post.isFollowed
    }
    this.apiService.updatePost(post, this.post.id).subscribe((res)=>{
      console.log("Updated post");
    });
  }
}