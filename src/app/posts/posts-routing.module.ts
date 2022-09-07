import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { JsCheatsheetListComponent } from './containers/js-cheatsheet-list/js-cheatsheet-list.component';
import { PostsListComponent } from './containers/posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent
  },
  {
    path: 'cheatsheet',
    component: JsCheatsheetListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
