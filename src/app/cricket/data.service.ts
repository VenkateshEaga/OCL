import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TeamService } from './team.service';
import { PlayerService } from './player.service';
import { Team } from './team.model';
import { Player } from './player.model';
import { Http } from '@angular/http';
import { Response } from "@angular/http";

@Injectable()
export class DataService {

    fetchPlayersSubscription: Subscription;
    playersUpdatedSubscription: Subscription;
    playerAddedSubscription: Subscription;
    fetchTeamsSubscription: Subscription;
    teamUpdatedSubscription: Subscription;

    constructor(private playerService: PlayerService,
        private teamService: TeamService,
        private http: Http) {

        this.fetchPlayersSubscription = this.playerService.fetchPlayers.subscribe(
            () => {
                this.getPlayers();
            }
        );

        this.playersUpdatedSubscription = this.playerService.playersUpdated.subscribe(
            (players: Player[]) => {
                this.updatePlayers(players);
            }
        );

        this.teamUpdatedSubscription = this.teamService.teamUpdated.subscribe(
            (team: Team) => {
                this.updateTeam(team);
            }
        );

        this.fetchTeamsSubscription = this.teamService.fetchTeams.subscribe(
            () => {
                this.getTeams();
            }
        );


    }

    getPlayers() {
        return this.http.get('/getAllPlayers').subscribe(
            (response: Response) => {
                const allPlayers: Player[] = response.json();
                this.playerService.setPlayers(allPlayers);
            }
        )
    }

    getTeams() {
        return this.http.get('/getAllTeams').subscribe(
            (response: Response) => {
                const teams: Team[] = response.json();
                this.teamService.setTeams(teams);
            }
        )
    }

    updatePlayers(players: Player[]) {
        this.http.post('/updatePlayers', players).subscribe();
    }

    updateAddedPlayer(player: Player) {
        this.http.post('/updateAddedPlayer', player).subscribe();
    }

    updateTeam(team: Team) {
        this.http.post('/updateTeam', team).subscribe();
    }
}