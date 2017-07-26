import { Player } from "app/cricket/player.model";
import { PlayerService } from "app/cricket/players.service";
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  
  isFullScreen: boolean = false;
  player: Player;
  playerChangedSubscription: Subscription;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.playerChanged.subscribe(
      (newPlayer: Player) => {
      this.player = newPlayer;
      this.onExpand();
    });
  }
  
  onExpand()
  {
    this.isFullScreen = true;
  }

  onMinimize()
  {
    this.isFullScreen = false;
  }

}
