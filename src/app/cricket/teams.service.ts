import { Subject } from 'rxjs/Subject';
import { Player } from './auction/player.model';
import { Team } from './team.model';
export class TeamService
{
    teamsList = new Subject<Team[]>();
    private teams: Team[] = [
        new Team(1, "Avengers", "assets/avatar.png", [
             new Player(1,'Naresh','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',false,true,false,false,false,0),
             new Player(1,'Veera prathapa Reddy Annem Punnem','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',false,false,true,false,false,0),
            new Player(1,'Venkateshwar','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',true,false,false,false,false,3000),
             new Player(1,'Ramesh','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',false,false,false,false,false,3000),
             new Player(1,'Suresh','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',false,false,false,false,false,3000),
             new Player(1,'Kranthi','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',false,false,false,false,false,3000),
             new Player(1,'Vikranth','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',false,false,false,false,false,3000),
             new Player(1,'Shekar','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',false,false,false,false,false,3000),
             new Player(1,'Rahul','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',false,false,false,false,false,3000)
            
        ], 0,"Subba Rao"),
        new Team(2, "Spartans", "assets/avatar.png", [
             new Player(1,'Venkateshwar','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',true,false,false,false,false,3000),
             new Player(1,'Ramesh','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',true,false,false,false,false,3000),
             new Player(1,'Suresh','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',true,false,false,false,false,3000),
             new Player(1,'Naresh','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',true,true,false,false,false,3000)
        ], 0,"Vijay"),
        new Team(3, "Royal Riders", "assets/avatar.png", [
             new Player(1,'Venkateshwar','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',true,false,false,false,false,3000),
             new Player(1,'Ramesh','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',true,false,false,false,false,3000),
             new Player(1,'Suresh','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',true,false,false,false,false,3000),
             new Player(1,'Naresh','assets/avatar.png'
            ,'GAP','Batsmen','Right','Right','All',true,true,false,false,false,3000)
        ], 0,"Babitha"),
        new Team(4, "Blazing FireBirds", "assets/avatar.png", [], 0,"Sheetal"),
        new Team(5, "Sunrisers", "assets/avatar.png", [], 0,"Vottem"),
        new Team(6, "Royal Challengers", "assets/avatar.png", [], 0,"Verma"),
        new Team(7, "Mumbai Indians", "assets/avatar.png", [], 0,"Patnala"),
        new Team(8, "Kings XI", "assets/avatar.png", [], 0,"Phani"),
        new Team(9, "Super Kings", "assets/avatar.png", [], 0,"kondi"),
        new Team(10, "Dare Devils", "assets/avatar.png", [], 0,"Pradeep"),
    ];
    constructor()
    {

    }

    getTeams()
    {
        return this.teams.slice();
    }
    getTeamById(id:number)
    {
        return this.teams.slice().find(x=>x.id===id) ;
    }
}