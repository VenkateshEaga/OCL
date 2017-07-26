import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionTeamItemComponent } from './auction-team-item.component';

describe('AuctionTeamItemComponent', () => {
  let component: AuctionTeamItemComponent;
  let fixture: ComponentFixture<AuctionTeamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionTeamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionTeamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
