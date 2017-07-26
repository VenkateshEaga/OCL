import { Component, OnInit } from '@angular/core';
import { Team } from "app/cricket/team.model";
import { TeamService } from "app/cricket/teams.service";

@Component({
  selector: 'app-auction-team-stats',
  templateUrl: './auction-team-stats.component.html',
  styleUrls: ['./auction-team-stats.component.css']
})
export class AuctionTeamStatsComponent implements OnInit {
  
  isFullScreen: boolean = false;
  teams: Team[] =[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
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
