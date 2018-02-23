import { Component, OnInit } from '@angular/core';
import{EventCharacter} from './event-character';
import {EventCharacterService} from './event-character.service';
import { TypeCharacterService } from 'app/type-character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventCharacterService, TypeCharacterService], 
})
export class AppComponent {
  title = 'Welcome To Social Zenith Society';


}