import { Player } from 'app/cricket/player.model';
import { environment } from 'environments/environment';
import { PlayerService } from 'app/cricket/player.service';
import { Subscription } from 'rxjs/Subscription';
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
  nextPlayerPickedSubscription: Subscription;
  constructor(private teamService: TeamService, private playerService: PlayerService ) { }

  ngOnInit() {
      this.nextPlayerPickedSubscription =  this.playerService.nextPlayerPicked.subscribe(
        ((player: Player) => {
          this.currentPlayer = player;
        })
      )
  }

  addPlayer(bidForm: NgForm)
  {
    this.currentPlayer.moneySpentOn = bidForm.value.bidAmount;
    this.currentPlayer.teamId = this.teamItem.id;
    this.playerService.playerUpdated.next(this.currentPlayer);
    this.teamService.addPlayerToTeam(this.teamItem.id, this.currentPlayer);
    bidForm.reset();
  }

  moneyLeftForBid(): number
  {
    return this.teamService.moneyLeft(this.teamItem);
  }

  isTeamFull(): boolean
  {
    return (this.teamService.playerCount(this.teamItem) >= environment.fullTeamCount) ? true : false;
  }

  playerCount(): number
  {
    return this.teamService.playerCount(this.teamItem);
  }

  ngOnDestroy() {
    this.nextPlayerPickedSubscription.unsubscribe();
  }
}
