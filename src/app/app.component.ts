import { Player } from './cricket/player.model';
import { TeamService } from 'app/cricket/team.service';
import { PlayerService } from './cricket/player.service';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from './cricket/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'OCL';
    fetchPlayersSubscription: Subscription;
    playerUpdatedSubscription: Subscription;
    fetchTeamsSubscription: Subscription;
    constructor(private playerService: PlayerService,
        private dataService: DataService,
        private teamService: TeamService) {

    }
    ngOnInit() {
        this.fetchPlayersSubscription = this.playerService.fetchPlayers.subscribe(
            () => {
                this.dataService.getPlayers();
            }
        );

        this.playerUpdatedSubscription = this.playerService.playerUpdated.subscribe(
            (player: Player) => {
                this.dataService.updatePlayer(player);
            }
        );

        this.fetchTeamsSubscription = this.teamService.fetchTeams.subscribe(
            () => {
                this.dataService.getTeams();
            }
        );
        this.playerService.fetchPlayersFromdb();
    }
    ngOnDestroy() {
        this.fetchPlayersSubscription.unsubscribe();
        this.fetchTeamsSubscription.unsubscribe();
        this.playerUpdatedSubscription.unsubscribe();
    }
}
