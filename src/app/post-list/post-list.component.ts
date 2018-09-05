import { Component, Input, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  @Input() postLoveIts: number;
  @Input() indexOfPost: number;

  constructor(private PostService: PostService) { }

  ngOnInit() {
  }

  getPostLoveIts() {
    return this.postLoveIts;
  }

  getColor() {
    if(this.postLoveIts > 0){
      return 'green';
    } else if (this.postLoveIts < 0){
      return 'red';
    }
  }

onLike(){
  this.PostService.onLikeOne(this.indexOfPost)
}

onDislike(){
  this.PostService.onDislikeOne(this.indexOfPost)
}

}
