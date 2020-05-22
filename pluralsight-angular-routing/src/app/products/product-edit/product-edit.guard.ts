import { ProductEditComponent } from './product-edit.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(
    component: ProductEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ): boolean | Observable<boolean> | Promise<boolean> {
    if(component.isDirty) {
      const productName = component.product.productName || 'New Product';
      return confirm(`Sair da página e perder as alterações de ${productName}`);
    }
    return true;
  }
}
