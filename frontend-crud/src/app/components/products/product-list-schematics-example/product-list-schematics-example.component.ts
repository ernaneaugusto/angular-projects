import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductListSchematicsExampleDataSource, ProductListSchematicsExampleItem } from './product-list-schematics-example-datasource';

@Component({
  selector: 'app-product-list-schematics-example',
  templateUrl: './product-list-schematics-example.component.html',
  styleUrls: ['./product-list-schematics-example.component.scss']
})
export class ProductListSchematicsExampleComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductListSchematicsExampleItem>;
  dataSource: ProductListSchematicsExampleDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProductListSchematicsExampleDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
