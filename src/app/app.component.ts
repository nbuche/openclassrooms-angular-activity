import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  constructor() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB7JmX78fx-7eHY-NIXZHZIKAkCZqogvsY",
    authDomain: "openclassrooms-angular.firebaseapp.com",
    databaseURL: "https://openclassrooms-angular.firebaseio.com",
    projectId: "openclassrooms-angular",
    storageBucket: "",
    messagingSenderId: "1079936353837"
  };
  firebase.initializeApp(config);
  }
}
