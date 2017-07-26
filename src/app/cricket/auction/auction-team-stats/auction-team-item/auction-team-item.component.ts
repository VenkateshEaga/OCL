import { Team } from "app/cricket/team.model";
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';


@Component({
  selector: 'app-auction-team-item',
  templateUrl: './auction-team-item.component.html',
  styleUrls: ['./auction-team-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuctionTeamItemComponent implements OnInit {
  
  @Input() teamItem: Team;
  constructor() { }

  ngOnInit() {
  }

}
