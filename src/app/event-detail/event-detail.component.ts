import { Component, OnInit, Input } from '@angular/core'; 
import{EventCharacter} from '../event-character'
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { EventCharacterService } from '../event-character.service';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  @Input()
  event: EventCharacter;
  
  constructor(
    private eventService: EventCharacterService,
    private route: ActivatedRoute,
    private location: Location) { }


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = String(params['id']);
      this.eventService.getEventCharacterById(id)
        .then(result => this.event = result);
    });
  };
  goBack(): void {
    this.location.back();
  }

}
