import { OnInit } from '@angular/core';
import { Player } from './player.model';
import { Subject } from "rxjs/Subject";
export class PlayerService {
    nextPlayerPicked = new Subject<any>();     //to other components and services
    fetchPlayers = new Subject<void>();        //from server
    playersUpdated = new Subject<any>();       //to server
    private id: number = 0;
    private players: Player[] = [];
    private currentPlayer: Player;

    constructor() {
        this.players.push(
            new Player(
                1,
                "Rajesh Vottem",
                "assets/profiles/Rajesh_Vottem.jpg",
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
                0,
                0),
            new Player(
                2,
                "Veera Annem",
                "assets/profiles/Veera.jpg",
                "ET",
                "Specialist Batsman",
                "Right Hand Batsman",
                "Right Arm Medium",
                "Not Available on 19-Sep-2017",
                false,
                false,
                false,
                false,
                false,
                0,
                0),
            new Player(
                3,
                "Venkat Eaga",
                "assets/profiles/Venkat.jpg",
                "ET",
                "Wicket Keeper-Batsman",
                "Right Hand Batsman",
                "",
                "Available for all dates",
                false,
                false,
                false,
                false,
                false,
                0,
                0),
            new Player(
                4,
                "Eoin Morgan",
                "assets/profiles/Eoin.jpg",
                "Int",
                "Specialist Batsman",
                "Left Hand Batsman",
                "",
                "Available for all dates",
                false,
                false,
                false,
                false,
                false,
                0,
                0),
            new Player(
                5,
                "Sachin Tendulkar",
                "assets/profiles/Sachin.jpg",
                "Int",
                "Specialist Batsman",
                "Right Hand Batsman",
                "Right Arm Slow",
                "Available for all dates",
                false,
                false,
                false,
                false,
                false,
                0,
                0),
            new Player(
                6,
                "Virender Sehwag",
                "assets/profiles/Sehwag.jpeg",
                "Int",
                "Specialist Batsman",
                "Right Hand Batsman",
                "Right Arm Off-Spin",
                "Not Available on 19-sep-2017, 26-sep-2017",
                false,
                false,
                false,
                false,
                false,
                0,
                0),
            new Player(
                7,
                "Brett Lee",
                "assets/profiles/Bret.jpg",
                "INT",
                "Specialist Bowler",
                "Right Hand Batsman",
                "Right Arm Fast",
                "Available for all dates",
                false,
                false,
                false,
                false,
                false,
                0,
                0),
            new Player(
                8,
                "Dhoni",
                "assets/profiles/Dhoni.jpg",
                "INT",
                "Wicket Keeper-Batsman",
                "Right Hand Batsman",
                "Right Arm Medium",
                "Available for all dates",
                false,
                false,
                false,
                false,
                false,
                0,
                0),
            new Player(
                9,
                "Virat Kohli",
                "assets/profiles/VK.jpg",
                "INT",
                "Specialist Batsman",
                "Right Hand Batsman",
                "Right Arm Medium",
                "Available for all dates",
                false,
                false,
                false,
                false,
                false,
                0,
                0),
            new Player(
                10,
                "R Ashwin",
                "assets/profiles/Ash.png",
                "INT",
                "All-Rounder",
                "Right Hand Batsman",
                "Right Arm Off-Spin",
                "Available for all dates",
                false,
                false,
                false,
                false,
                false,
                0,
                0),

            new Player(
                11,
                "Jaques Kallis",
                "assets/profiles/Jack.jpg",
                "INT",
                "All-Rounder",
                "Right Hand Batsman",
                "Right Arm Fast",
                "Available for all dates",
                false,
                false,
                false,
                false,
                false,
                0,
                0),
            new Player(
                12,
                "A.B. De Villiers",
                "assets/profiles/ABDV.png",
                "INT",
                "Specialist Batsman",
                "Right Hand Batsman",
                "",
                "Available for all dates",
                false,
                false,
                false,
                false,
                false,
                0,
                0)
        );

        if(this.players == null)
        {
            this.fetchPlayers.next();
        }
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    fetchNewPlayer() {
        if (this.currentPlayer) {
            this.currentPlayer.skippedCount++;
        }
        let playerLeftCount = 0;
        let skipCounter = 0;
        do {
            this.currentPlayer = this.players.filter(
                function (el) {
                    if (!el.isPicked && skipCounter == el.skippedCount) {
                        playerLeftCount++;
                    }
                    return (el.isPicked == false && skipCounter == el.skippedCount)
                }
            )[Math.floor(Math.random() * playerLeftCount)];
            skipCounter++;
        } while (playerLeftCount == 0)
        this.emitNextPlayer();
        this.notifyPlayersUpdateToServer();
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

    notifyPlayersUpdateToServer()
    {
        this.playersUpdated.next(this.players);
    }
}