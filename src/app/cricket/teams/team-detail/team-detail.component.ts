import { Subscription } from 'rxjs/Subscription';
import { TeamService } from 'app/cricket/team.service';
import { Team } from 'app/cricket/team.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  id:number;
  team: Team ;
  teamSubscription : Subscription;
  constructor(private route:ActivatedRoute, private teamService:TeamService) { }

  ngOnInit() {
     this.route.params.subscribe(
      (params: Params) =>{
        this.id= +params['id'];
       this.team= this.teamService.getTeam(this.id);
      }
    )
    this.teamSubscription = this.teamService.teamsChanged.subscribe(
      (teams :Team[]) =>{
              this.team=teams.find(x => x.id === this.id);
      }
    )
  }

}
