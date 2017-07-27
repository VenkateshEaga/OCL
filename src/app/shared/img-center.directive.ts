

import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';
import { UtilitiesService } from "app/shared/utilities.service";

@Directive({
  selector: '[appImgCenter]'
})
export class ImgCenterDirective {
  @HostBinding('style') imgStyle;
  constructor(private imageRef: ElementRef,
    private renderer: Renderer2,
    private utilitiesService: UtilitiesService) { }

  @HostListener('load') positionImageToCenter(eventData: Event) {
    this.imgStyle = this.utilitiesService.resizeImage(
        this.imageRef.nativeElement.parentElement.clientWidth,
        this.imageRef.nativeElement.parentElement.clientHeight,
        this.imageRef.nativeElement.naturalWidth,
        this.imageRef.nativeElement.naturalHeight
      );
  }
}
