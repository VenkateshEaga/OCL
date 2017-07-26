import { Player } from './player.model';
export class Team {
    public id: number;
    public name: string;
    public logoPath: string = "assets/avatar.png";
    public players: Player[];
    public moneySpent: number;

    constructor(
        id: number,
        name: string,
        logoPath: string,
        players: Player[],
        moneySpent: number  
    ) 
    {
        this.id = id;
        this.name = name;
        this.logoPath = logoPath;
        this.players = players;
        this.moneySpent = moneySpent;
    }
}