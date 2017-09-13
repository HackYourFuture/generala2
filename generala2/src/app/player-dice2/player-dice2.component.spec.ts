import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDice2Component } from './player-dice2.component';

describe('PlayerDice2Component', () => {
  let component: PlayerDice2Component;
  let fixture: ComponentFixture<PlayerDice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
