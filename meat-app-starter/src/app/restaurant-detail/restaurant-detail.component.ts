import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // para acessar os parametros das rotas podemos utilizar os metodos
    // .snapshot(): pega os parametros da URL apenas uma vez
    // .subscribe(): fica observando e caso haja alguma mudanca na rota eh executado novamente
    this.restaurantService.restaurantsById(this.route.snapshot.params['id'])
      .subscribe(rest => this.restaurant = rest);
  }

}
