import { Subject } from 'rxjs/Subject';
import { OnInit } from '@angular/core';
import { Team } from './team.model';
import { Player } from "app/cricket/player.model";
import { environment } from "environments/environment";
export class TeamService {
    fetchTeams = new Subject<void>();     //from server
    teamsChanged = new Subject<Team[]>();
    currentPlayerStatusChanged = new Subject<void>();
    private teams: Team[]
    = [
        new Team(1, "Avengers", "assets/team-logos/Avengers.png", []),
        new Team(2, "Spartans", "assets/team-logos/Spartans.png", []),
        new Team(3, "Royal Riders", "assets/team-logos/RR.png", []),
        new Team(4, "Blazing FireBirds", "assets/team-logos/FB.png", []),
        new Team(5, "Sunrisers", "assets/team-logos/SRH.png", []),
        new Team(6, "Royal Challengers", "assets/team-logos/RCB.png", []),
        new Team(7, "Mumbai Indians", "assets/team-logos/MI.png", []),
        new Team(8, "Kings XI", "assets/team-logos/KXIP.png", []),
        new Team(9, "Super Kings", "assets/team-logos/CSK.png", []),
        new Team(10, "Dare Devils", "assets/team-logos/DD.png", []),
    ];
    constructor() {

    }

    getTeams() {
        if (this.teams == null) {
            this.fetchTeams.next();
            return this.teams == null ? [] : this.teams.slice();
        }
        else {
            return this.teams.slice();
        }
    }

    addPlayerToTeam(teamID: number, player: Player) {
        this.teams.find(team => team.id == teamID).players.push(player);
        this.currentPlayerStatusChanged.next();
    }

    setTeams(teams: Team[]) {
        if (teams == null) {
            teams = [];
        }
        this.teams = teams;
        this.teamsChanged.next(this.teams);
    }
    getTeam(id: number) {
        return this.getTeams().find(x => x.id === id);
    }

    moneyLeft(team: Team): number {
        let moneySpent: number = 0;
        team.players.forEach((player) => {
            moneySpent += player.moneySpentOn;
        })
        let futureMinMoneyOnPlayers = (environment.fullTeamCount - this.playerCount(team) - 1) * 1000;
        return environment.teamBudget - moneySpent - (futureMinMoneyOnPlayers < 0 ? 0 : futureMinMoneyOnPlayers);
    };


    playerCount(team: Team): number {
        return team.players ? team.players.length : 0;
    }

    isTeamEligibleForCurrentPlayer(currentPlayer: Player, currentTeam: Team) {
        if (environment.applyDEPConstraint) {
            let sameDepPlayers: number = currentTeam.players.filter((player: Player) => {
                return (player.businessUnit == currentPlayer.businessUnit && !player.isCaptain)
            }).length;
            return environment.departmentConstraints[currentPlayer.businessUnit] > sameDepPlayers;
        }
        else {
            return true;
        }
    }
}