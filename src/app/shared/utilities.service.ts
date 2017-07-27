import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from "@angular/core";

@Injectable()
export class UtilitiesService {
    
    constructor(private sanitizer: DomSanitizer) {
    }

    resizeImage(maxW: number, maxH: number, currW: number, currH: number) {
        var ratio = currH / currW;
        let style: string = "";

        if (ratio <= 1) {
            currH = maxH;
            currW = currH / ratio;
            style = "margin-left:-" + ((currW - maxW) / 2).toFixed(2) + "px;";
        }
        else {
            currW = maxW;
            currH = currW * ratio;
            style = "margin-top:-" + ((currH - maxH) / 2).toFixed(2) + "px;";
        }
        style += "width:" + currW.toFixed(2) + "px;" + "height:" + currH.toFixed(2) + "px;";
        return this.sanitizer.bypassSecurityTrustStyle(style)["changingThisBreaksApplicationSecurity"];
    }
}