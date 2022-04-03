import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { doc, setDoc, Firestore } from '@angular/fire/firestore';
import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(public auth: Auth, public fbs: Firestore, public router: Router, public fireAuth: AngularFireAuth) { }

  currentUser$: Observable<firebase.default.User | null> = this.fireAuth.authState;
  email$: Observable<string | null> = this.currentUser$.pipe(map(user => { return !user ? null : user.email }));

  register(name: string, email: string, password: string, rePass: string): void {

    if (password !== rePass) {
      alert('Password missmatch!')
    }

    createUserWithEmailAndPassword(this.auth, email, password)
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

  login(email: string, password: string): void {

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

  logout(): void {
    localStorage.clear();
    localStorage.removeItem('id');
    signOut(this.auth);
  }

}
