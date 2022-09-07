import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-js-cheatsheet-list',
  templateUrl: './js-cheatsheet-list.component.html',
  styleUrls: ['./js-cheatsheet-list.component.scss']
})
export class JsCheatsheetListComponent implements OnInit {
  postsList$ = this._postSrv.loadCheetPosts();

  constructor(private _postSrv: PostService) { }

  ngOnInit() {

  }

}
