import { Component, OnInit, Input } from '@angular/core'; 
import{TypeCharacter} from '../type-character'
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { TypeCharacterService } from '../type-character.service';


@Component({
  selector: 'app-event-character',
  templateUrl: './event-character.component.html',
  styleUrls: ['./event-character.component.css']
})
export class EventCharacterComponent implements OnInit {

  @Input()
  event_type: TypeCharacter;
  
  constructor(
    private typeService: TypeCharacterService,
    private route: ActivatedRoute,
    private location: Location) { }


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = String(params['type']);
      this.typeService.getTypeCharacterById(id)
        .then(result => this.event_type = result);
    });
  };
  goBack(): void {
    this.location.back();
  }

}
