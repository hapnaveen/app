import {Component, OnInit} from '@angular/core';
import {MarkedService} from './marked.service';
import {AngularFirestoreDocument, QueryDocumentSnapshot} from '@angular/fire/firestore';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-marked',
  templateUrl: './marked.component.html',
  styleUrls: ['./marked.component.css']
})
export class MarkedComponent implements OnInit {
  marked: QueryDocumentSnapshot<any>[];
  selected;

  constructor(private markedService: MarkedService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.spinner.show();
    this.markedService.getMarked().subscribe(val => {
      this.marked = val.docs;
      this.spinner.hide();
    }, err => {
      window.alert('Error occurred! Please refresh');
    });
  }

  delete(id) {
    this.spinner.show();
    this.markedService.delete(id).catch(err => {
      this.spinner.hide();
      window.alert('Error occurred! Please try again...');
    }).then(() => {
        this.marked.splice(this.marked.indexOf(this.marked.find(x => x.id === id)), 1);
        this.spinner.hide();
      }
    );
  }

}
