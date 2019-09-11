import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})

export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter = "";

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Dados populados pelo resolve de app.routing.module.ts
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

}
