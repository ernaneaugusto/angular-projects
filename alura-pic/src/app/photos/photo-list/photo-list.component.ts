import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})

export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter = "";
  debounce: Subject<string> = new Subject<string>();;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Dados populados pelo resolve de app.routing.module.ts
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce
      .pipe(debounceTime(400))
      .subscribe(filter => this.filter = filter);
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
