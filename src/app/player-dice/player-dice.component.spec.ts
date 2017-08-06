import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDiceComponent } from './player-dice.component';

describe('PlayerDiceComponent', () => {
  let component: PlayerDiceComponent;
  let fixture: ComponentFixture<PlayerDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
