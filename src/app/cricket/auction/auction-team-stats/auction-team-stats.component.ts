import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-team-stats',
  templateUrl: './auction-team-stats.component.html',
  styleUrls: ['./auction-team-stats.component.css']
})
export class AuctionTeamStatsComponent implements OnInit {
  
  isFullScreen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onExpand()
  {
    this.isFullScreen = true;
  }

  onMinimize()
  {
    this.isFullScreen = false;
  }

}
