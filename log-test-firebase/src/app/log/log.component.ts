import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { ServerService } from '../services/server.service'
import config from '../config'

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor(
    public serverService: ServerService
  ) {}

  ngOnInit() {
    // firebase.initializeApp(config);
    // firebase.firestore();
  }
  send() {
    this.serverService.updatelog(
      {
        "PlayerId": "120.0.0.1-2019-01-18-13",
        "events": [
          {
            "deteTime": "2019-0118",
            "EventId": 1,
            "ExerciseId": 1
          },
          {
            "deteTime": "2019-0118",
            "EventId": 1,
            "ExerciseId": 1
          }
        ]
    } 
    )
      .subscribe(
        (response)=> console.log(response),
        (error) => console.log('error', error)
      )
  }

  getLogs() {
    this.serverService.getAllLog()
      .subscribe(
        (response) => {
          const data = response.json()
        },
        (error) => console.log(error)
      )
  }
}
