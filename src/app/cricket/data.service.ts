import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TeamService } from './team.service';
import { PlayerService } from './player.service';
import { Team } from './team.model';
import { Player } from './player.model';
import { Http } from '@angular/http';
import { Response } from "@angular/http";

@Injectable()
export class DataService {

   

    constructor(private playerService: PlayerService,
        private teamService: TeamService,
        private http: Http) {

       
    }

    getPlayers() {
        return this.http.get('http://192.168.9.188:99/api/player').subscribe(
            (response: Response) => {
                const allPlayers: Player[] = response.json();
                this.playerService.setPlayers(allPlayers);
            }
        )
    }

    getTeams() {
        return this.http.get('http://192.168.9.188:99/api/team').subscribe(
            (response: Response) => {
                const teams: Team[] = response.json();
                this.teamService.setTeams(teams);
            }
        )
    }

    updatePlayer(player: Player) {
        this.http.post('http://192.168.9.188:99/api/player/updatePlayer', player).subscribe();
    }

}