import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    postLog(log: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'})
        return this.http.post(
            'https://eduplaytion-29135.firebaseio.com/log/data.json',
            log,
            { headers }
        )
    }

    getAllLog() {
        return this.http.get('https://eduplaytion-29135.firebaseio.com/log/data.json');
    }

    updatelog(log: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'})
        return this.http.put(
            'https://eduplaytion-29135.firebaseio.com/log/data.json',
            log,
            { headers }
        )
    }
}