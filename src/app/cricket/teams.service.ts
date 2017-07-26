import { Team } from './team.model';
export class TeamService
{
    private teams: Team[] = [
        new Team(1, "Avengers", "assets/avatar.png", [], 0),
        new Team(2, "Spartans", "assets/avatar.png", [], 0),
        new Team(3, "Royal Riders", "assets/avatar.png", [], 0),
        new Team(4, "Blazing FireBirds", "assets/avatar.png", [], 0),
        new Team(5, "Sunrisers", "assets/avatar.png", [], 0),
        new Team(6, "Royal Challengers", "assets/avatar.png", [], 0),
        new Team(7, "Mumbai Indians", "assets/avatar.png", [], 0),
        new Team(6, "Kings XI", "assets/avatar.png", [], 0),
        new Team(6, "Super Kings", "assets/avatar.png", [], 0),
        new Team(6, "Dare Devils", "assets/avatar.png", [], 0),
    ];
    constructor()
    {

    }

    getTeams()
    {
        return this.teams.slice();
    }
}