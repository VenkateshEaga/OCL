import { Player } from './../player.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  
  isFullScreen: boolean = false;
  player: Player
  constructor() { }

  ngOnInit() {
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
