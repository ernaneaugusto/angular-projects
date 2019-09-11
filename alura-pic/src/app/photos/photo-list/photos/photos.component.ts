import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];
  rows: any = [];

  constructor() { }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

  ngOnInit() {
    this.rows = this.groupColumns(this.photos);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) this.rows = this.groupColumns(this.photos);
  }

}
