import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './containers/posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { }
