import { OnInit } from '@angular/core';
import { Player } from './player.model';
import { Subject } from "rxjs/Subject";
export class PlayerService {
    nextPlayerPicked = new Subject<any>();     //to other components and services
    fetchPlayers = new Subject<void>();        //from server
    playerUpdated = new Subject<Player>();       //to server
    private id: number = 0;
    private players: Player[] = [];
    private currentPlayer: Player;

    constructor() {
      

        
    }
     fetchPlayersFromdb(){
        if(this.players.length == 0)
            {
                this.fetchPlayers.next();
            }
     }
    getCurrentPlayer() {
        return this.currentPlayer;
    }

    fetchNewPlayer() {
        if (this.currentPlayer != null) {
            this.currentPlayer.skippedCount++;
            this.notifyPlayerUpdateToServer(this.currentPlayer);
        }
        let playersLeftCount = 0;
        let skipCounter = 0;
        do {
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

    setPlayers(players: Player[])
    {
        if(players == null)
        {
            players = [];
        }
        this.players = players;
    }

    emitNextPlayer() {
        this.nextPlayerPicked.next({ 'currentPlayer': this.currentPlayer });
    }

    notifyPlayerUpdateToServer(player: Player)
    {
        this.playerUpdated.next(player);
    }
}