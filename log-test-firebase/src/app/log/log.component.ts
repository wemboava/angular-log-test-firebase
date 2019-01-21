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

  data: any;
  currentPlayer: any;
  playerId: string;
  userId: string;

  constructor(
    public serverService: ServerService
  ) {}

  ngOnInit() {
    this.getLogs();
  }
  send() {
    this.serverService.postLog(
      {
        "playerId": this.playerId,
        "events": [{
            "deteTime": "2019-01-18",
            "EventId": 2,
            "ExerciseId": 1
          },
          {
            "deteTime": "2019-0118",
            "EventId": 2,
            "ExerciseId": 2
          }
        ]
      }  
    )
      .subscribe(
        (response)=> {
          this.userId = response.json().name
          localStorage.setItem('userKey', response.json().name)
          this.getLogs();
        },
        (error) => console.log('error', error)
      )
  }

  getLogs() {
    this.serverService.getAllLog()
      .subscribe(
        (response) => {
          this.data = Object.values(response.json()).reverse()
          this.currentPlayer = Object.assign(this.data)[0]
        },
        (error) => console.log(error)
      )
  }

  updateLog() {
    this.currentPlayer.events.push(
      {
        "deteTime": "2019-0118",
        "EventId": 3,
        "ExerciseId": 3
      })

    this.serverService.updatelog(
      this.currentPlayer,
      localStorage.getItem('userKey')
    )
      .subscribe(
        (response)=> {
          this.getLogs();
          this.currentPlayer = response.json();
        },
        (error) => console.log('error', error)
      )
  }
}
