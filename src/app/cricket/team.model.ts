import { Player } from './player.model';
export class Team {
    public id: number;
    public name: string;
    public logoPath: string = "assets/avatar.png";
    public players: Player[];
    public teamBudget: number;
    public fullTeamCount: number;
    get moneyLeft(): number
    {
        let moneySpent: number = 0;
        this.players.forEach((player)=>{
            moneySpent+= player.moneySpentOn;
        })
        let futureMinMoneyOnPlayers = (this.fullTeamCount - this.playerCount - 1) * 1000;
        return this.teamBudget - moneySpent - (futureMinMoneyOnPlayers < 0 ? 0 : futureMinMoneyOnPlayers);
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
        teamBudget: number,
        fullTeamCount: number
    ) 
    {
        this.id = id;
        this.name = name;
        this.logoPath = logoPath;
        this.players = players;
        this.teamBudget = teamBudget;
        this.fullTeamCount = fullTeamCount;
    }
}