import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { doc, setDoc, Firestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: Auth, public fbs: Firestore) { }

  register(name: string, email: string, password: string) {

    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((response: any) => {
        setDoc(doc(this.fbs, "users", response.user.uid), {
          name: name,
          email: response.user.email
        });
      })
  }

  login(email: string, password: string) {

    signInWithEmailAndPassword(this.auth, email, password)
      .then((response: any) => {
        return response.user;
      })
  }

  logout() {
    signOut(this.auth)
  }
}
