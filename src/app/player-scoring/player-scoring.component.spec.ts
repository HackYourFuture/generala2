import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScoringComponent } from './player-scoring.component';

describe('PlayerScoringComponent', () => {
  let component: PlayerScoringComponent;
  let fixture: ComponentFixture<PlayerScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
