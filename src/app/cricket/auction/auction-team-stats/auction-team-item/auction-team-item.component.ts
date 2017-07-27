import { PlayerService } from 'app/cricket/player.service';
import { Subscription } from 'rxjs/Subscription';
import { Player } from './../../player.model';
import { TeamService } from './../../../team.service';
import { NgForm } from '@angular/forms';
import { Team } from "app/cricket/team.model";
import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-auction-team-item',
  templateUrl: './auction-team-item.component.html',
  styleUrls: ['./auction-team-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuctionTeamItemComponent implements OnInit, OnDestroy {
  
  @Input() teamItem: Team;
  currentPlayer: Player;
  playerChangedSubscription: Subscription;
  constructor(private teamService: TeamService, private playerService: PlayerService ) { }

  ngOnInit() {
      this.playerService.playerChanged.subscribe(
        ((player: Player) => {
          this.currentPlayer = player;
        })
      )
  }

  addPlayer(bidForm: NgForm)
  {
    this.currentPlayer.moneySpentOn = bidForm.value.bidAmount;
    this.teamService.addPlayerToTeam(this.teamItem.id, this.currentPlayer);
    bidForm.reset();
  }

  ngOnDestroy() {
    this.playerChangedSubscription.unsubscribe();
  }
}
