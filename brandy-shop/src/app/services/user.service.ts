import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { doc, setDoc, Firestore } from '@angular/fire/firestore';
import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: Auth, public fbs: Firestore, public router: Router, public fireAuth: AngularFireAuth) { }

  currentUser$: Observable<firebase.default.User | null> = this.fireAuth.authState;
  email$: Observable<string | null> = this.currentUser$.pipe(map(user => { return !user ? null : user.email }));
  userId$: Observable<string | null> = this.currentUser$.pipe(map(user => { return !user ? null : user.uid }));
  // isLogged$: Observable<boolean> = this.currentUser$.pipe(map(user => { return user ? true : false }));

  get isAdmin(): any {
    return localStorage.getItem('id') == "loqy3xS9M8cIS1jLtvwk0FMKh2o1" ? true : false;
  }

  register(name: string, email: string, password: string, rePass: string): Promise<void> {

    if (password !== rePass) {
      alert('Password missmatch!')
    }

    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((response: any) => {
        setDoc(doc(this.fbs, "users", response.user.uid), {
          email: response.user.email
        });
        localStorage.setItem('id', response.user.uid);
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error(err.message);
        alert('Wrong username or password');
      })
  }

  login(email: string, password: string) {

    signInWithEmailAndPassword(this.auth, email, password)
      .then((response: any) => {
        return response;
      })
      .then(res => {
        localStorage.setItem('id', res.user.uid);
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error(err.message);
        alert('Wrong email or password');
      })
  }

  logout(): Promise<void> {
    localStorage.clear();
    localStorage.removeItem('id');
    return signOut(this.auth);
  }

}
