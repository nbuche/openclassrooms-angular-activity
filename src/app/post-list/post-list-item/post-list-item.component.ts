import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/Post.model';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLikeIt() {
    this.postsService.updateLikeIt(this.post);
  }

  onDontLikeIt() {
    this.postsService.updateDontLikeIt(this.post);
  }

  onDeletePost() {
    this.postsService.removePost(this.post);
  }

}
