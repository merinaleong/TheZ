/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventCharacterService } from './event-character.service';

describe('EventCharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventCharacterService]
    });
  });

  it('should ...', inject([EventCharacterService], (service: EventCharacterService) => {
    expect(service).toBeTruthy();
  }));
});
