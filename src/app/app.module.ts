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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuctionComponent,
    PlayerDetailComponent,
    AuctionTeamStatsComponent,
    AuctionTeamItemComponent,
    ImgCenterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    AuthModule
  ],
  providers: [TeamService, PlayerService, UtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
