import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AngularFireAuth,  } from '@angular/fire/compat/auth';
import { Database, set, ref, update } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: Auth, public router: Router, public db: Database, public fireAuth: AngularFireAuth) { }

  currentUser$: Observable<firebase.default.User | null> = this.fireAuth.authState;
  email$: Observable<string | null> = this.currentUser$.pipe(
    map(user => {
      console.log(user?.uid);
      return !user ? null : user.email
    })
  )

  register(name: string, email: string, password: string, rePass: string): void {

    if (password !== rePass) {
      alert('Password mismatch!')
    }

    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        let user = userCredential.user;
        // console.log(user);

        set(ref(this.db, 'users/' + user.uid), {
          username: name,
          email: email,
          id: user.uid
        });

        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error(err.message);
        alert('Wrong username or password');
      })
  }

  login(email: string, password: string): void {

    signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        let user = userCredential.user;
        let date = Date.now();
        // console.log(user);

        update(ref(this.db, 'users/' + user.uid), {
          last_login: date
        });

        this.router.navigate(['/']);
      })
      .then(res => {
      })
      .catch(err => {
        console.error(err.message);
        alert('Wrong email or password');
      })
  }

  logout(): void {
    signOut(this.auth);
  }

}
