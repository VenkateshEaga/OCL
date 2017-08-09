import { environment } from './../../environments/environment';
import { Player } from './player.model';
export class Team {
    public id: number;
    public name: string;
    public logoPath: string = "assets/avatar.png";
    public players: Player[];
    public fullTeamCount: number;
    get moneyLeft(): number
    {
        let moneySpent: number = 0;
        this.players.forEach((player)=>{
            moneySpent+= player.moneySpentOn;
        })
        let futureMinMoneyOnPlayers = (this.fullTeamCount - this.playerCount - 1) * 1000;
        return environment.teamBudget - moneySpent - (futureMinMoneyOnPlayers < 0 ? 0 : futureMinMoneyOnPlayers);
    };
    get playerCount(): number
    {
        return this.players ? this.players.length : 0;
    }

    constructor(
        id: number,
        name: string,
        logoPath: string,
        players: Player[],
        fullTeamCount: number
    ) 
    {
        this.id = id;
        this.name = name;
        this.logoPath = logoPath;
        this.players = players;
        this.fullTeamCount = fullTeamCount;
    }
}