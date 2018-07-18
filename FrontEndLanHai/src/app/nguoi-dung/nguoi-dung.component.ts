import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nguoi-dung',
  templateUrl: './nguoi-dung.component.html',
  styleUrls: ['./nguoi-dung.component.css']
})
export class NguoiDungComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }
  LogOut() {
    sessionStorage.removeItem('session');
    this.route.navigate(['/login']);
  }
}
