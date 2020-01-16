import { Component, OnInit, Input, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InstagramPostDetailsComponent } from '../instagram-post-details/instagram-post-details.component';
import { InstagramApiService } from '../instagram-api.service';
import { InstagramProfileComponent } from '../instagram-profile/instagram-profile.component';

@Component({
  selector: 'app-instagram-post',
  templateUrl: './instagram-post.component.html',
  styleUrls: ['./instagram-post.component.css']
})
export class InstagramPostComponent implements OnInit {

  constructor(public dialog: MatDialog, private apiService: InstagramApiService) { }

  ngOnInit() {
  }

  @Input()
  postt: Post;

  onclick(post: Post) {
    const dialogRef = this.dialog.open(InstagramPostDetailsComponent, {
      width: '750px',
      height: '500px',
      data: {clickedpost : post}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openprofile(post: Post) {
    const dialogRef = this.dialog.open(InstagramProfileComponent, {
      width: '800px',
      height: '470px',
      data: {clickedpost : post}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  onLike() {
    if (this.postt.isLiked == false) {
      this.postt.likes++;
      this.postt.isLiked=true;
      this.postt.button='https://cdn1.iconfinder.com/data/icons/instagram-23/512/198_Love_Instagram_Interface_Like-512.png';
    }
    else {
      this.postt.likes--;
      this.postt.isLiked=false;
      this.postt.button='https://www.pinclipart.com/picdir/middle/33-337369_heart-shaped-clipart-instagram-heart-sign-icon-transparent.png';
    }
    this.updatepost();
  }

  onSave() {
    if (this.postt.isSaved == false) {
      this.postt.isSaved=true;
      this.postt.savebutton='https://static.thenounproject.com/png/10523-200.png';
    }
    else {
      this.postt.isSaved=false;
      this.postt.savebutton='https://cdn2.iconfinder.com/data/icons/user-interface-180/128/User-Interface-166-512.png';
    }
    this.updatepost();
  }

  updatepost() {
    var post={
      "id": this.postt.id,
      "headerUrl": this.postt.headerUrl,
      "name": this.postt.name,
      "location": this.postt.location,
      "longDescription": this.postt.longDescription,
      "pictureUrl": this.postt.pictureUrl,
      "likes": this.postt.likes,
      "isLiked": this.postt.isLiked,
      "button": this.postt.button,
      "isSaved": this.postt.isSaved,
      "savebutton": this.postt.savebutton,
      "followers": this.postt.followers,
      "following": this.postt.following,
      "pictures": this.postt.pictures,
      "follow": this.postt.follow,
      "isFollowed": this.postt.isFollowed
    }
    this.apiService.updatePost(post, this.postt.id).subscribe((res)=>{
      console.log("Updated post");
    });
  }
}