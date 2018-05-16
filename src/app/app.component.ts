import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  posts = [
    new Post('Mon premier post',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at ' +
    'nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue ' +
    'semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ' +
    'ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in ' +
    'libero.',
    5,
    new Date()),
    new Post('Mon deuxième post',
    'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. ' +
    'Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. ' +
    'Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. ' +
    'Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.',
    -2,
    new Date()),
    new Post('Encore un post',
    'Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ' +
    'Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. ' +
    'Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. ' +
    ' Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. ',
    0,
    new Date())
  ];

}
