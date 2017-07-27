import { UtilitiesService } from './../../../shared/utilities.service';
import { Player } from "app/cricket/player.model";
import { PlayerService } from "app/cricket/player.service";
import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { SafeStyle } from "@angular/platform-browser/platform-browser";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit, AfterViewChecked {

  @ViewChild('playerImage') private imageElement: ElementRef;
  isFullScreen: boolean = true;
  player: Player;
  playerChangedSubscription: Subscription;

  constructor(private playerService: PlayerService,
    private utilitiesService: UtilitiesService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.playerService.playerChanged.subscribe(
      (newPlayer: Player) => {
        this.player = newPlayer;
        this.isFullScreen = true;
      });
  }

  ngAfterViewChecked() {
    if (this.imageElement) {
      this.imageElement.nativeElement.style = this.utilitiesService.resizeImage(
        this.imageElement.nativeElement.parentElement.clientWidth,
        this.imageElement.nativeElement.parentElement.clientHeight,
        this.imageElement.nativeElement.naturalWidth,
        this.imageElement.nativeElement.naturalHeight);
    }
  }

  onResize() {
    this.isFullScreen = !this.isFullScreen;
  }

  ngOnDestroy() {
    this.playerChangedSubscription.unsubscribe();
  }
}