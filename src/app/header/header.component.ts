import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  open = true;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  toggle(a: HTMLElement) {
    if (this.open) {
      a.classList.add('show');
    } else {
      a.classList.remove('show');
    }
    this.open = !this.open;
  }

}
