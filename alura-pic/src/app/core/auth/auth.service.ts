import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient, 
    private userService: UserService
  ) { }

  authenticate(userName: string, password: string) {
    // console.log("Typeof userName", userName);
    // console.log("Typeof password", password);
    const passwordInt = parseInt(password);
    return this.http
      .post(
        `${API_URL}/user/login`,
        { userName, passwordInt },
        { observe: 'response' } // configura acesso ao headers ao realizar uma requisicao POST
      )
      .pipe(tap(res => { // pipe utilizado para pegar as infos do usuario antes de realizar o subscribe para geracao da api key
        const authToken = res.headers.get('x-access-token');
        this.userService.setToken(authToken);
        console.log(`Usuário ${userName} autenticado com TOKEN: ${authToken}`);
      }))
  }
}
