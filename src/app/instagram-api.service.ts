import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramApiService {
  constructor(private http: HttpClient) { }

 
  getPostComments(postId: number):Observable<PostComment[]>{
    return this.http.get<PostComment[]>(`https://5dfa537238678a00145fa10f.mockapi.io/api/posts/${postId}/postComments`)
  }

  postComment(postId: number, comment: PostComment){
    return this.http
    .post(`https://5dfa537238678a00145fa10f.mockapi.io/api/posts/${postId}/postComments`, comment);
  }

  updatePost(post: Post, postId: number){
    return this.http.put(`https://5dfa537238678a00145fa10f.mockapi.io/api/posts/${postId}`, post);
}
getPosts(pageNumber: number):Observable<Post[]>{
  return this.http.get<Post[]>(`https://5dfa537238678a00145fa10f.mockapi.io/api/posts?page=${pageNumber}&limit=2`)
}
}
