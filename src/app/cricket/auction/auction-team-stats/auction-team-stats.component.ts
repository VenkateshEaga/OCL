import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from "app/cricket/team.model";
import { TeamService } from "app/cricket/team.service";

@Component({
  selector: 'app-auction-team-stats',
  templateUrl: './auction-team-stats.component.html',
  styleUrls: ['./auction-team-stats.component.css']
})
export class AuctionTeamStatsComponent implements OnInit, OnDestroy {
  teamSubscription : Subscription;
  isFullScreen: boolean = false;
  teams: Team[] =[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    this.teamSubscription = this.teamService.teamsChanged.subscribe(
      (teams :Team[]) =>{
              this.teams=teams;
      }
    )
  }

  ngOnDestroy(){
    this.teamSubscription.unsubscribe();
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
