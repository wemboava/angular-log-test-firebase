import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

import { LogServiceService } from './services/log.service'

import config from './config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'log-test-firebase';

  constructor(
    public logServiceService: LogServiceService
  ) {}

  ngOnInit() {
    firebase.initializeApp(config);
    // firebase.firestore();
  }
}
