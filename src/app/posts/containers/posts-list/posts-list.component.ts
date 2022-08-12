import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  postsList$ = this.postSrv.loadPosts();
  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  constructor(private postSrv: PostService) { }

  ngOnInit() {

  }

}
