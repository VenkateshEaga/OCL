import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TeamService } from './team.service';
import { PlayerService } from './player.service';
import { Team } from './team.model';
import { Player } from './player.model';
import { Http } from '@angular/http';
import { Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class DataService {
    public serviceAddress = 'http://192.168.9.188:99';

    constructor(private http: Http) {


    }

    getPlayers() {
        return this.http.get(this.serviceAddress + '/api/player').map(
            (response: Response) => {
                return response.json();
            }
        );
    }

    getTeams() {
        return this.http.get(this.serviceAddress + '/api/team').map(
            (response: Response) => {
                return response.json();
            }
        );
    }

    updatePlayer(player: Player) {
        this.http.post(this.serviceAddress + '/api/player/updatePlayer', player).subscribe();
    }

}