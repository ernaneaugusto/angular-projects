import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/components/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-expenses-delete',
  templateUrl: './expenses-delete.component.html',
  styleUrls: ['./expenses-delete.component.scss']
})
export class ExpensesDeleteComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.updateBreadcrumbName('Gastos');
  }

}
