import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Route, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  token: string;

  constructor(private auth: AuthService, private router: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    if (this.auth.getToken()) {
      this.router.navigate(['/mark']);
    }
  }

  submit() {
    this.spinner.show();
    if (this.token != null || this.token !== '') {
      console.log(this.token);
      this.auth.validate(this.token).subscribe(val => {
          if (val.exists) {
            localStorage.setItem('token', this.token);
            this.router.navigate(['/mark']);
          } else {
            window.alert('Invalid token');
          }
          this.spinner.hide();
        },
        err => {
          window.alert('Error occurred! Please refresh');
        });
    }
  }

}
