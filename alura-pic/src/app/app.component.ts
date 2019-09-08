import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos = [
    { description: 'Home de Ferro', url: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/05/homem-de-ferro-roubado.jpg' },
    { description: 'Home de Ferro 2', url: 'https://cdn.cloudcoaching.com.br/wp-content/uploads/2019/01/o-que-podemos-aprender-com-o-homem-de-ferro-1200x628-1200x628.png' }
  ];
}
