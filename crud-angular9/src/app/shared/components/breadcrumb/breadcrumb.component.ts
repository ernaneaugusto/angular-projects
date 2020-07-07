import { BreadcrumbInterface } from './breadcrumb.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbInfos: BreadcrumbInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
