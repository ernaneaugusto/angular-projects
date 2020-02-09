import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as	firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: Observable<firebase.User>

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.user = afAuth.authState;
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
  authUser(): Observable<firebase.User> {
    return this.user;
  }
}
