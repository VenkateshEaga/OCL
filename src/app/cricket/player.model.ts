export class Player {
    constructor(
        public id: number,
        public name: string,
        public imgPath: string = "assets/avatar.png",
        public teamId: number,
        public businessUnit: string,
        public playingRole: string,
        public battingStyle: string,
        public bowlingStyle: string,
        public availability: string,
        public isWicketKeeper: boolean,
        public isCaptain: boolean,
        public isViceCaptain: boolean,
        public isOnNotice: boolean,
        public skippedCount: number,
        public moneySpentOn: number        
    ) 
    {
    }
}