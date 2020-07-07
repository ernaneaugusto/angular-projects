import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  readonly breadcrumbName = new Subject<string>();

  constructor() {
    this.updateBreadcrumbName('');
  }

  public updateBreadcrumbName(pageName: string) {
    this.breadcrumbName.next(pageName);
  }
}
