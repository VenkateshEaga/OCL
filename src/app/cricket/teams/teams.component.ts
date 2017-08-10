import { Subscription } from 'rxjs/Subscription';
import { Team } from 'app/cricket/team.model';
import { TeamService } from 'app/cricket/team.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit, OnDestroy {
  teams: Team[];
  teamSubscription : Subscription;
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

}
