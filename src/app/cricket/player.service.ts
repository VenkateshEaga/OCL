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
        this.players.push(
            new Player(
                1,
                "Rajesh Vottem",
                "assets/profiles/Rajesh_Vottem.jpg",
                0,
                "OPS",
                "All-Rounder",
                "Right Hand Batsman",
                "Right Arm Off-Spin",
                "Available for all dates",
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
                0,
                "ET",
                "Specialist Batsman",
                "Right Hand Batsman",
                "Right Arm Medium",
                "Not Available on 19-Sep-2017",
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
                0,
                "ET",
                "Wicket Keeper-Batsman",
                "Right Hand Batsman",
                "",
                "Available for all dates",
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
                0,
                "INT",
                "Specialist Batsman",
                "Left Hand Batsman",
                "",
                "Available for all dates",
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
                0,
                "INT",
                "Specialist Batsman",
                "Right Hand Batsman",
                "Right Arm Slow",
                "Available for all dates",
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
                0,
                "INT",
                "Specialist Batsman",
                "Right Hand Batsman",
                "Right Arm Off-Spin",
                "Not Available on 19-sep-2017, 26-sep-2017",
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
                0,
                "INT",
                "Specialist Bowler",
                "Right Hand Batsman",
                "Right Arm Fast",
                "Available for all dates",
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
                0,
                "INT",
                "Wicket Keeper-Batsman",
                "Right Hand Batsman",
                "Right Arm Medium",
                "Available for all dates",
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
                0,
                "INT",
                "Specialist Batsman",
                "Right Hand Batsman",
                "Right Arm Medium",
                "Available for all dates",
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
                0,
                "INT",
                "All-Rounder",
                "Right Hand Batsman",
                "Right Arm Off-Spin",
                "Available for all dates",
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
                0,
                "INT",
                "All-Rounder",
                "Right Hand Batsman",
                "Right Arm Fast",
                "Available for all dates",
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
                0,
                "INT",
                "Specialist Batsman",
                "Right Hand Batsman",
                "",
                "Available for all dates",
                false,
                false,
                false,
                false,
                0,
                0)
        );

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