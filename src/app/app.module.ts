import { TeamComponent } from './cricket/teams/team/team.component';
import { PlayerService } from './cricket/players.service';
import { TeamService } from './cricket/teams.service';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuctionComponent } from './cricket/auction/auction.component';
import { PlayerDetailComponent } from './cricket/auction/player-detail/player-detail.component';
import { AuctionTeamStatsComponent } from './cricket/auction/auction-team-stats/auction-team-stats.component';
import { AuctionTeamItemComponent } from './cricket/auction/auction-team-stats/auction-team-item/auction-team-item.component';
import { TeamsComponent } from './cricket/teams/teams.component';
import { TeamDetailComponent } from './cricket/teams/team-detail/team-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuctionComponent,
    PlayerDetailComponent,
    AuctionTeamStatsComponent,
    AuctionTeamItemComponent,
    TeamsComponent,
    TeamComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    AuthModule
  ],
  providers: [TeamService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
