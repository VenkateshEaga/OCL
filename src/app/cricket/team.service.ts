import { Subject } from 'rxjs/Subject';
import { OnInit } from '@angular/core';
import { Team } from './team.model';
import { Player } from "app/cricket/player.model";
export class TeamService {
    fetchTeams = new Subject<void>();     //from server
    playerAddedToTeam = new Subject<any>();    //to server
    teamsChanged = new Subject<Team[]>();
    private teamInitialAmount: number = 200000;
    private teams: Team[] 
    /*= [
        new Team(1, "Avengers", "assets/team-logos/Avengers.png", [], this.teamInitialAmount, 17),
        new Team(2, "Spartans", "assets/team-logos/Spartans.png", [], this.teamInitialAmount, 17),
        new Team(3, "Royal Riders", "assets/team-logos/RR.png", [], this.teamInitialAmount, 17),
        new Team(4, "Blazing FireBirds", "assets/team-logos/FB.png", [], this.teamInitialAmount, 17),
        new Team(5, "Sunrisers", "assets/team-logos/SRH.png", [], this.teamInitialAmount, 17),
        new Team(6, "Royal Challengers", "assets/team-logos/RCB.png", [], this.teamInitialAmount, 17),
        new Team(7, "Mumbai Indians", "assets/team-logos/MI.png", [], this.teamInitialAmount, 17),
        new Team(8, "Kings XI", "assets/team-logos/KXIP.png", [], this.teamInitialAmount, 17),
        new Team(9, "Super Kings", "assets/team-logos/CSK.png", [], this.teamInitialAmount, 17),
        new Team(10, "Dare Devils", "assets/team-logos/DD.png", [], this.teamInitialAmount, 17),
    ];*/
    constructor() {

    }

    getTeams() {
        if (this.teams == null) {
            this.fetchTeams.next();
            return this.teams ==null?[]:this.teams.slice();
        }
        else{
            return this.teams.slice();
        }
    }

    addPlayerToTeam(teamID: number, player: Player) {
        this.teams.find(team => team.id == teamID).players.push(player);
        this.playerAddedToTeam.next({'teamID': teamID, 'player': player});
    }

    setTeams(teams: Team[])
    {
        if(teams == null)
        {
            teams = [];
        }
        this.teams = teams;
        this.teamsChanged.next(this.teams);
    }
}