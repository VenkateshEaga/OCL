import { CanDeactivateGaurd } from './shared/can-deactivate-gaurd.service';
import { DataService } from './cricket/data.service';
import { UtilitiesService } from './shared/utilities.service';
import { PlayerService } from './cricket/player.service';
import { TeamService } from './cricket/team.service';
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
import { ImgCenterDirective } from './shared/img-center.directive';
import { TeamsComponent } from './cricket/teams/teams.component';
import { TeamComponent } from './cricket/teams/team/team.component';
import { TeamDetailComponent } from './cricket/teams/team-detail/team-detail.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuctionComponent,
    PlayerDetailComponent,
    AuctionTeamStatsComponent,
    AuctionTeamItemComponent,
    ImgCenterDirective,
    TeamsComponent,
    TeamComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    AuthModule,
    HttpModule
  ],
  providers: [TeamService, PlayerService, UtilitiesService, DataService, CanDeactivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
