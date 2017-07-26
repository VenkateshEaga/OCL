export class Player {
    public id: number;
    public name: string;
    public imgPath: string = "assets/avatar.png";
    public businessUnit: string;
    public playingRole: string;
    public battingStyle: string;
    public bowlingStyle: string;
    public availability: string;
    public isWicketKeeper: boolean;
    public isCaptain: boolean;
    public isViceCaptain: boolean;
    public isPicked: boolean;
    public isOnNotice: boolean;
    public moneySpentOn: number;

    constructor(
        id: number,
        name: string,
        imgPath: string,
        businessUnit: string,
        playingRole: string,
        battingStyle: string,
        bowlingStyle: string,
        availability: string,
        isWicketKeeper: boolean,
        isCaptain: boolean,
        isViceCaptain: boolean,
        isPicked: boolean,
        isOnNotice: boolean,
        moneySpentOn: number        
    ) 
    {
        this.id = id;
        this.name = name;
        this.imgPath = imgPath;
        this.businessUnit = businessUnit;
        this.playingRole = playingRole;
        this.battingStyle = battingStyle;
        this.bowlingStyle = bowlingStyle;
        this.availability = availability;
        this.isWicketKeeper = isWicketKeeper;
        this.isCaptain = isCaptain;
        this.isViceCaptain = isViceCaptain;
        this.isPicked = isPicked;
        this.isOnNotice = isOnNotice;
        this.moneySpentOn = moneySpentOn;
    }
}