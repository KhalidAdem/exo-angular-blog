import { Component, OnInit } from '@angular/core';
import {PostService} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mon-blog';
  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date()
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  posts: any;

  constructor(private PostService: PostService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(){
    this.posts = this.PostService.posts;
  }
}
