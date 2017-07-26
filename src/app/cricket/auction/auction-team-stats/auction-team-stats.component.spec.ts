import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionTeamStatsComponent } from './auction-team-stats.component';

describe('AuctionTeamStatsComponent', () => {
  let component: AuctionTeamStatsComponent;
  let fixture: ComponentFixture<AuctionTeamStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionTeamStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionTeamStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
