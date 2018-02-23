import { Injectable } from '@angular/core';
import {EventCharacter} from './event-character'
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventCharacterService {
  private BASE_URL = "http://localhost:3000/api/events"

  constructor(private http: Http) { }
  getEventCharacters(): Promise<EventCharacter[]> {   
    return this.http.get(this.BASE_URL)
    .toPromise()
    .then(response => response.json() as EventCharacter[])
    .catch(this.handleError);
  }

  private handleError(error:any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getEventCharacterById(id: string): Promise<EventCharacter> {
    return this.getEventCharacters()
      .then(result => result.find(event => event.Event_ID === id));
  }
  
}
