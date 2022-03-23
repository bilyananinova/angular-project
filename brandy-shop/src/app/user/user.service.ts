import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { doc, setDoc, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: Auth, public fbs: Firestore, public router: Router) { }

  register(name: string, email: string, password: string, rePass: string) {

    if (password !== rePass) {
      alert('Password missmatch!')
    }

    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((response: any) => {
        setDoc(doc(this.fbs, "users", response.user.uid), {
          name: name,
          email: response.user.email
        });
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
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.error(err.message);
        alert('Wrong email or password');
      })
  }

  logout() {
    signOut(this.auth)
  }
}
