import { Subject } from 'rxjs/Subject';
import { Team } from './team.model';
import { Player } from "app/cricket/player.model";
export class TeamService
{
    teamsChanged = new Subject<Team[]>();
    private teamInitialAmount: number = 200000;
    private teams: Team[] = [
        new Team(1, "Avengers", "assets/avatar.png", [], this.teamInitialAmount, 17),
        new Team(2, "Spartans", "assets/avatar.png", [], this.teamInitialAmount, 17),
        new Team(3, "Royal Riders", "assets/avatar.png", [],this.teamInitialAmount, 17),
        new Team(4, "Blazing FireBirds", "assets/avatar.png", [], this.teamInitialAmount, 17),
        new Team(5, "Sunrisers", "assets/avatar.png", [], this.teamInitialAmount, 17),
        new Team(6, "Royal Challengers", "assets/avatar.png", [], this.teamInitialAmount, 17),
        new Team(7, "Mumbai Indians", "assets/avatar.png", [], this.teamInitialAmount, 17),
        new Team(8, "Kings XI", "assets/avatar.png", [], this.teamInitialAmount, 17),
        new Team(9, "Super Kings", "assets/avatar.png", [], this.teamInitialAmount, 17),
        new Team(10, "Dare Devils", "assets/avatar.png", [], this.teamInitialAmount, 17),
    ];
    constructor()
    {

    }

    getTeams()
    {
        return this.teams.slice();
    }

    addPlayerToTeam(teamID: number, player: Player)
    {
        this.teams.find(team => team.id == teamID).players.push(player);
        this.notifyTeamsUpdate();
    }

    notifyTeamsUpdate()
    {
        this.teamsChanged.next(this.teams.slice());
    }
}