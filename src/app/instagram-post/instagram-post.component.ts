import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-instagram-post',
  templateUrl: './instagram-post.component.html',
  styleUrls: ['./instagram-post.component.css']
})
export class InstagramPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  postt: Post;
}
