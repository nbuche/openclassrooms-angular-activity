import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  public likeIt : number = 0;
  public dontLikeIt : number = 0;

  constructor() { }

  ngOnInit() {
    if(this.post.loveIts>0){
      this.likeIt = this.post.loveIts;
    }
    if(this.post.loveIts<0){
      this.dontLikeIt = Math.abs(this.post.loveIts);
    }
  }

  onLoveIt() {
    this.likeIt++;
    this.post.loveIts = this.likeIt - this.dontLikeIt;
  }

  onDislikeIt() {
    this.dontLikeIt++;
    this.post.loveIts = this.likeIt - this.dontLikeIt;
  }

}
