import { PlayerService } from 'app/cricket/player.service';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Subject } from 'rxjs/Subject';
import { OnInit } from '@angular/core';
import { Team } from './team.model';
import { Player } from "app/cricket/player.model";
import { environment } from "environments/environment";

@Injectable()
export class TeamService {
    fetchTeams = new Subject<void>();     //from server
    teamsChanged = new Subject<Team[]>();
    currentPlayerStatusChanged = new Subject<void>();
    private totalPlayerCount: number;
    private teams: Team[]
    // = [
    //     new Team(1, "Avengers", "assets/team-logos/Avengers.png", []),
    //     new Team(2, "Spartans", "assets/team-logos/Spartans.png", []),
    //     new Team(3, "Royal Riders", "assets/team-logos/RR.png", []),
    //     new Team(4, "Blazing FireBirds", "assets/team-logos/FB.png", []),
    //     new Team(5, "Sunrisers", "assets/team-logos/SRH.png", []),
    //     new Team(6, "Royal Challengers", "assets/team-logos/RCB.png", []),
    //     new Team(7, "Mumbai Indians", "assets/team-logos/MI.png", []),
    //     new Team(8, "Kings XI", "assets/team-logos/KXIP.png", []),
    //     new Team(9, "Super Kings", "assets/team-logos/CSK.png", []),
    //     new Team(10, "Dare Devils", "assets/team-logos/DD.png", []),
    // ];
    constructor(private dataService: DataService) {

    }

    getTeams() {
        if (this.teams == null) {
            this.dataService.getTeams().subscribe(
                (teams: Team[]) => {
                    this.teams = teams;
                    this.teamsChanged.next(this.teams == null ? [] : this.teams.slice());
                }
            )
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
        this.teamsChanged.next(this.teams.slice());
    }
    getTeam(id: number) {
        return this.getTeams().find(x => x.id === id);
    }

    moneyLeft(team: Team): number {
        let moneySpent: number = 0;
        team.players.forEach((player) => {
            moneySpent += player.moneySpentOn;
        })
        let futureMinMoneyOnPlayers = (this.maxPlayersPerTeam() - this.playerCount(team) - 1) * 1000;
        return environment.teamBudget - moneySpent - (futureMinMoneyOnPlayers < 0 ? 0 : futureMinMoneyOnPlayers);
    };

    setTotalPlayerCount(playerCount: number) {
        this.totalPlayerCount = playerCount;
    }

    maxPlayersPerTeam() {
        var maxPlayersAvailable = Math.floor(this.totalPlayerCount / this.teams.length);
        var extraPlayerCount = this.totalPlayerCount % this.teams.length;
        if (extraPlayerCount != 0) {
            if (this.teams.filter(x => x.players.length == maxPlayersAvailable + 1)
                .length < extraPlayerCount) {
                return maxPlayersAvailable + 1;
            }
        }
        return maxPlayersAvailable;
    }


    playerCount(team: Team): number {
        return team.players ? team.players.length : 0;
    }

    isTeamEligibleForCurrentPlayer(currentPlayer: Player, currentTeam: Team) {
        let sameDepPlayers: number = currentTeam.players.filter((player: Player) => {
            return (player.businessUnit == currentPlayer.businessUnit && !player.isCaptain && !player.isViceCaptain)
        }).length;
        return (environment.departmentConstraints[currentPlayer.businessUnit] || sameDepPlayers + 1) > sameDepPlayers;
    }
}