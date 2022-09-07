import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './containers/posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostCardComponent } from './components/post-card/post-card.component';
import { JsCheatsheetListComponent } from './containers/js-cheatsheet-list/js-cheatsheet-list.component';


@NgModule({
  declarations: [
    PostsListComponent,
    PostCardComponent,
    JsCheatsheetListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { }
