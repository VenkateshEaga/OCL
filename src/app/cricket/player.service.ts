import { Subscription } from 'rxjs/Subscription';
import { TeamService } from 'app/cricket/team.service';
import { Injectable, OnInit } from '@angular/core';
import { Player } from 'app/cricket/player.model';
import { Subject } from "rxjs/Subject";
@Injectable()
export class PlayerService {
    nextPlayerPicked = new Subject<Player>();     //to other components and services
    fetchPlayers = new Subject<void>();        //from server
    playerUpdated = new Subject<Player>();       //to server
    noCurrentPlayerSubscription: Subscription;
    private id: number = 0;
    private players: Player[] = [];
    private currentPlayer: Player;

    constructor(private teamService: TeamService) {
       

        this.noCurrentPlayerSubscription =  this.teamService.currentPlayerStatusChanged.subscribe(
            () =>
            {
                this.currentPlayer = null;
            }
        );
    }

    fetchPlayersFromdb() {
        if (this.players.length == 0) {
            this.fetchPlayers.next();
        }
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    fetchNewPlayer() {
        if (this.currentPlayer != null && this.currentPlayer.teamId == 0) {
            this.currentPlayer.skippedCount++;
            this.notifyPlayerUpdateToServer(this.currentPlayer);
        }
        let playersLeftCount = 0;
        let skipCounter = 0;
        do {

            if (this.players.filter(
                function (el) {
                    return (el.teamId == 0)
                }).length == 0) {
                alert('No players left to pick! This auction is complete!');
                break;
            }

            this.currentPlayer = this.players.filter(
                function (el) {
                    if (el.teamId == 0 && skipCounter == el.skippedCount) {
                        playersLeftCount++;
                    }
                    return (el.teamId == 0 && skipCounter == el.skippedCount)
                }
            )[Math.floor(Math.random() * playersLeftCount)];
            skipCounter++;
        } while (playersLeftCount == 0)
        this.emitNextPlayer();
    }

    setPlayers(players: Player[]) {
        if (players == null) {
            players = [];
        }
        this.players = players;
    }

    emitNextPlayer() {
        this.nextPlayerPicked.next(this.currentPlayer);
    }

    notifyPlayerUpdateToServer(player: Player) {
        this.playerUpdated.next(player);
    }

    ngOnDestroy() {
        this.noCurrentPlayerSubscription.unsubscribe();
    }
}