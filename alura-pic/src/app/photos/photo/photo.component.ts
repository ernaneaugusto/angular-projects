import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {
    @Input() description: string = "";
    @Input() url: string = "";
}