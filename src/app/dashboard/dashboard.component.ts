import { Component, OnInit } from '@angular/core';
import {EventCharacter} from '../event-character';
import {EventCharacterService} from '../event-character.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  events: EventCharacter[];
  selected: EventCharacter;
  constructor(private eventService: EventCharacterService) { }
  onSelect(event: EventCharacter): void {
    this.selected= event;
  }
  getEventCharacters(): void {
    this.eventService.getEventCharacters()
    .then(events =>this.events = events.sort(function(a, b) {
      var c = Date.parse(a.Event_From_Time);
      var d = Date.parse(b.Event_To_Time);
      return c-d;
  }));
  }

 
  ngOnInit() {
    this.eventService.getEventCharacters()
      .then(results => this.events = results.sort(function(a, b) {
        var c = Date.parse(a.Event_From_Time);
        var d = Date.parse(b.Event_To_Time);
        return c-d;
    }));
    }
}