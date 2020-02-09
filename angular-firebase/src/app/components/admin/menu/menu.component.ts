import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(
    private authServ: AuthenticationService,
    private router: Router
  ) { }

  public sair() {
    this.authServ.logout()
      .then(() => {
        this.router.navigate(['/']);
      });
  }


  ngOnInit() {
    this.user = this.authServ.authUser();
  }

}
