import { PlayerService } from './../player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onFetchPlayerClick()
  {
    this.playerService.fetchNewPlayer();
  }

}
