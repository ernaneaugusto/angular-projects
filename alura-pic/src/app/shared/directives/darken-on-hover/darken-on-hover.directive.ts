import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness: string = "90%";

    constructor(
        private el: ElementRef,
        private render: Renderer
    ) { }

    @HostListener('mouseover')
    darkenOn() {
        this.el.nativeElement;
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.el.nativeElement;
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}