import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firestore: AngularFirestore, private route: Router) {
  }

  validate(token) {
    return this.firestore.collection('tokens').doc(token).get();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  revokeToken() {
    localStorage.removeItem('token');
    this.route.navigate(['/auth']);
  }
}
