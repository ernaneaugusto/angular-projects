import { CategoriesModel } from './../../shared/models/categories.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-categories',
  templateUrl: './table-categories.component.html',
  styleUrls: ['./table-categories.component.scss']
})
export class TableCategoriesComponent implements OnInit {

  @Input() data: Array<CategoriesModel>;

  constructor() { }

  ngOnInit(): void {
  }

}
