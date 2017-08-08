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
  currentPlayerWrapper: any = {'currentPlayer': null};
  nextPlayerPickedSubscription: Subscription;
  constructor(private teamService: TeamService, private playerService: PlayerService ) { }

  ngOnInit() {
      this.nextPlayerPickedSubscription =  this.playerService.nextPlayerPicked.subscribe(
        ((currentPlayerWrapper: any) => {
          this.currentPlayerWrapper = currentPlayerWrapper;
        })
      )
  }

  addPlayer(bidForm: NgForm)
  {
    this.currentPlayerWrapper.currentPlayer.moneySpentOn = bidForm.value.bidAmount;
    this.currentPlayerWrapper.currentPlayer.isPicked = true;
    this.teamService.addPlayerToTeam(this.teamItem.id, this.currentPlayerWrapper.currentPlayer);
    bidForm.reset();
    this.currentPlayerWrapper.currentPlayer = null;
    this.playerService.nextPlayerPicked.next(this.currentPlayerWrapper);
  }

  ngOnDestroy() {
    this.nextPlayerPickedSubscription.unsubscribe();
  }
}
