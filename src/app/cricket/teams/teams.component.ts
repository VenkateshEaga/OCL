import { Team } from './../team.model';
import { TeamService } from 'app/cricket/teams.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams : Team[]
  constructor(private teamService : TeamService, private router: Router,
  private route:ActivatedRoute) { }

  ngOnInit() {
      // this.teamService.teamsList.subscribe(
      //   (teams: Team[])=>{
      //       this.teams=teams;
      //   }
      // )
      this.teams=this.teamService.getTeams();
  }
  populateTeam(id:number){
   this.router.navigate([id],{relativeTo:this.route})
  }

}
