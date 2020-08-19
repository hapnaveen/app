import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MarkingService {

  constructor(private fire: AngularFirestore) {
  }

  addMarks(obj) {
    return this.fire.collection('marks').add(obj);
  }

  updateMarks(obj, id) {
    console.log(id);
    return this.fire.collection('marks').doc(id).update(obj);
  }

  getPaper(id) {
    return this.fire.collection('marks').doc(id).get();
  }
}
