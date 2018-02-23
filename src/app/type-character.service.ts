import { Injectable } from '@angular/core';
import {TypeCharacter} from './type-character'
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class TypeCharacterService {
  private BASE_URL = "http://localhost:3000/api/types"

  constructor(private http: Http) { }
  getTypeCharacters(): Promise<TypeCharacter[]> {   
    return this.http.get(this.BASE_URL)
    .toPromise()
    .then(response => response.json() as TypeCharacter[])
    .catch(this.handleError);
  }

  private handleError(error:any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getTypeCharacterById(id: string): Promise<TypeCharacter> {
    return this.getTypeCharacters()
      .then(result => result.find(test => test.Activity_ID === id));
  }
  
}
