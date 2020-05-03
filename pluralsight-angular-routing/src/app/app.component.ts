import { MessageService } from './messages/message.service';
import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { AuthService } from './user/auth.service';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    // Comecamos a assistir os eventos de navegacao de rotas no constructor
    this.router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  public showMessages(): void {
    this.messageService.isDisplayed = true;
    this.router.navigate([{ outlets: { popup: ['messages'] } }]);
  }
  
  public hideMessages(): void {
    this.messageService.isDisplayed = false;
    this.router.navigate([{ outlets: { popup: null }}]);
  }

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  logOut(): void {
    this.authService.logout();
    console.log("Bye");
    this.router.navigateByUrl('/home');
  }
}
