import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'order', component: OrderComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  {
    path: 'restaurants/:id', component: RestaurantDetailComponent, children:
      [
        // pathMatch: 'full' // o 'full' nesse caso sera utilizado para quando acessar
        // exatamente a rota /restaurants/:id/menu
        { path: "", redirectTo: "menu", pathMatch: "full" },
        { path: "menu", component: MenuComponent },
        { path: "reviews", component: ReviewsComponent }
      ]
  },
  { path: 'order', component: OrderComponent }
]