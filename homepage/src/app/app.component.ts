import { Component, OnInit } from '@angular/core';
import { EventDetail } from './event-detail'; 
import {DUMMY_DATA} from './data/dummy-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zenith Society Event';
  events = DUMMY_DATA.sort(function(a,b){ 
    var c = Date.parse(a.Event_From_Time);
    var d = Date.parse(b.Event_From_Time);
    
    return c - d;});
}
