import { AuthGuard } from './shared/auth-guard.service';
import { CanDeactivateGaurd } from './shared/can-deactivate-gaurd.service';
import { TeamsComponent } from './cricket/teams/teams.component';
import { TeamDetailComponent } from './cricket/teams/team-detail/team-detail.component';
import { AuctionComponent } from './cricket/auction/auction.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'auction', component: AuctionComponent, canActivate:[AuthGuard] 
      , canDeactivate: [CanDeactivateGaurd] },
    { path: 'teams', component: TeamsComponent, children:[
        { path:':id', component:TeamDetailComponent},
    ] }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}