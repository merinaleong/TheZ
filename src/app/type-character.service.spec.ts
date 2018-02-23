/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypeCharacterService } from './type-character.service';

describe('TypeCharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeCharacterService]
    });
  });

  it('should ...', inject([TypeCharacterService], (service: TypeCharacterService) => {
    expect(service).toBeTruthy();
  }));
});
