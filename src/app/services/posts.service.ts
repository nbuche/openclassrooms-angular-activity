import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';


@Injectable()
export class PostsService {

  posts: Post[] = [];
 postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  updateLikeIt(post) {
    post.likeIt++;
    this.saveSinglePost(post);
    this.emitPosts();
  }

  updateDontLikeIt(post) {
    post.dontLikeIt++;
    this.saveSinglePost(post);
    this.emitPosts();
  }

  saveSinglePost(post) {
    const postIndexToUpdate = this.posts.findIndex(
        (postEl) => {
          if (postEl === post) {
            return true;
          }
        }
    );

      firebase.database().ref('/posts/' + postIndexToUpdate).set(post);

  }

  getPosts() {
    firebase.database().ref('/posts').on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
        (postEl) => {
          if (postEl === post) {
            return true;
          }
        }
    );

    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
