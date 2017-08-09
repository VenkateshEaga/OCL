<<<<<<< HEAD
import { TeamService } from './../../teams.service';
import { Team } from 'app/cricket/team.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Dataintegration

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
<<<<<<< HEAD
  id:number;
  team:Team;
  constructor(private route:ActivatedRoute, private teamService: TeamService) { }

  ngOnInit() {
     this.route.params.subscribe(
      (params: Params) =>{
        this.id= +params['id'];
      
        this.team=this.teamService.getTeamById(this.id);
      }
    )
=======

  constructor() { }

  ngOnInit() {
>>>>>>> Dataintegration
  }

}
