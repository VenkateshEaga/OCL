import { Player } from './player.model';
export class Team {
    constructor(
        public id: number,
        public name: string,
        public logoPath: string= "assets/avatar.png",
        public players: Player[],
        public moneySpent: number,  
        public ownerName: string
    ) 
    { }
}