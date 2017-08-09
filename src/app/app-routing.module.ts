import { TeamDetailComponent } from './cricket/teams/team-detail/team-detail.component';
import { TeamsComponent } from './cricket/teams/teams.component';
import { AuctionComponent } from './cricket/auction/auction.component';
import { TeamsComponent } from './cricket/teams/teams.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'auction', component: AuctionComponent },
<<<<<<< HEAD
    { path: 'teams', component: TeamsComponent ,children:[
        { path:':id',component:TeamDetailComponent}
    ] }
=======
    { path: 'teams', component: TeamsComponent }
>>>>>>> Dataintegration
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}