import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MarkedService {

  constructor(private fire: AngularFirestore, private auth: AuthService) {
  }

  getMarked() {
    return this.fire.collection('marks', ref => ref.where('token', '==', this.auth.getToken())).get();
  }

  delete(id) {
    return this.fire.collection('marks').doc(id).delete();
  }
}
