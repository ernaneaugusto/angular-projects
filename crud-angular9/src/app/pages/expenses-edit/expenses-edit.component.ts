import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/components/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-expenses-edit',
  templateUrl: './expenses-edit.component.html',
  styleUrls: ['./expenses-edit.component.scss']
})
export class ExpensesEditComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.updateBreadcrumbName('Gastos');
  }

}
