import { Directive, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[myFor]'
})
export class MyForDirective implements OnInit {

    @Input('myForEm') numbers: number[];

    constructor(
        private containerRef: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) { }

    ngOnInit(): void {
        for (let number of this.numbers) {
            this.containerRef.createEmbeddedView(
                this.templateRef, { $implicit: number }
            );
        }
    }

}
