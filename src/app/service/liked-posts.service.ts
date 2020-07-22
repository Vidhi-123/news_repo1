import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikedPostsService {
private liked_posts="http://localhost:3000/liked_posts/"
  constructor(private _http:HttpClient) { }
  addLikedPosts(item)
{
  
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.liked_posts,body,{headers:head1});
  
}
getLikedPostsByUserId(user_id)
{
    return this._http.get(this.liked_posts+user_id);
}
deletePosts(user_id,title)
{
  
    
    return this._http.delete(this.liked_posts+user_id+'/'+title);
  
}
}
