import { OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Team } from './team.model';
import { Player } from "app/cricket/player.model";
export class TeamService {
    fetchTeams = new Subject<void>();     //from server
    private teams: Team[] = [
        new Team(1, "Avengers", "assets/team-logos/Avengers.png", []),
        new Team(2, "Spartans", "assets/team-logos/Spartans.png", []),
        new Team(3, "Royal Riders", "assets/team-logos/RR.png", []),
        new Team(4, "Blazing FireBirds", "assets/team-logos/FB.png", []),
        new Team(5, "Sunrisers", "assets/team-logos/SRH.png", []),
        new Team(6, "Royal Challengers", "assets/team-logos/RCB.png", []),
        new Team(7, "Mumbai Indians", "assets/team-logos/MI.png", []),
        new Team(8, "Kings XI", "assets/team-logos/KXIP.png", []),
        new Team(9, "Super Kings", "assets/team-logos/CSK.png", []),
        new Team(10, "Dare Devils", "assets/team-logos/DD.png", [])
    ];
    constructor() {

    }

    getTeams() {
        if (this.teams == null) {
            this.fetchTeams.next();
        }
        return this.teams.slice();
    }

    addPlayerToTeam(teamID: number, player: Player) {
        this.teams.find(team => team.id == teamID).players.push(player);
    }

    setTeams(teams: Team[])
    {
        if(teams == null)
        {
            teams = [];
        }
        this.teams = teams;
    }
}