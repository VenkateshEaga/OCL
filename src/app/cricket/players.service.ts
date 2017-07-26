import { Player } from './player.model';
import { Subject } from "rxjs/Subject";
export class PlayerService
{
    playerChanged = new Subject<Player>();
    
    private currentPlayer: Player;

    constructor(){

    }

    getCurrentPlayer()
    {
        return this.currentPlayer;
    }

    fetchNewPlayer()
    {
        this.currentPlayer = new Player(
            1, 
            "Rajesh Vottem", 
            "assets/avatar.png", 
            "Ops", 
            "All-Rounder",
            "Right Hand Batsman",
            "Right Arm Off-Spin",
            "Available for all dates",
            false,
            false,
            false,
            false,
            false,
            0);    
            this.notifyPlayerChange();
    }

    notifyPlayerChange()
    {
        this.playerChanged.next(this.currentPlayer);
    }
}