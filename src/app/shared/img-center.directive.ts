

import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';
import { UtilitiesService } from "app/shared/utilities.service";

@Directive({
  selector: '[appImgCenter]'
})
export class ImgCenterDirective {
  constructor(private imageRef: ElementRef,
    private renderer: Renderer2,
    private utilitiesService: UtilitiesService) { }

  @HostListener('load') positionImageToCenter(eventData: Event) {
    if(this.imageRef)
        this.imageRef.nativeElement.style = this.utilitiesService.resizeImage(
        this.imageRef.nativeElement.parentElement.clientWidth + 1,
        this.imageRef.nativeElement.parentElement.clientHeight + 1,
        this.imageRef.nativeElement.naturalWidth,
        this.imageRef.nativeElement.naturalHeight
      );
  }
}
