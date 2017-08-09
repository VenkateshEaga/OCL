import { TeamService } from './../team.service';
import { Player } from 'app/cricket/player.model';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../data.service';
import { PlayerService } from './../player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
 fetchPlayersSubscription: Subscription;
    playerUpdatedSubscription: Subscription;
    fetchTeamsSubscription: Subscription;
  constructor(private playerService: PlayerService,
   private dataService: DataService,
    private teamService :TeamService) { }

  ngOnInit() {
     this.fetchPlayersSubscription = this.playerService.fetchPlayers.subscribe(
            () => {
                this.dataService.getPlayers();
            }
        );

        this.playerUpdatedSubscription = this.playerService.playerUpdated.subscribe(
            (player: Player) => {
                this.dataService.updatePlayer(player);
            }
        );

        this.fetchTeamsSubscription = this.teamService.fetchTeams.subscribe(
            () => {
                this.dataService.getTeams();
            }
        );
        this.playerService.fetchPlayersFromdb();
  }

  onFetchPlayerClick()
  {
    this.playerService.fetchNewPlayer();
  }

}
