import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/post.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,) { }

  loadPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>('/assets/json/js-sheets.json');
  }
}
