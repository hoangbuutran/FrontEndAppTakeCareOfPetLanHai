import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../shared/Service/session.service';
import { NguoiDungService } from '../shared/Service/NguoiDungService';
import { CoSoYTeService } from '../shared/Service/CoSoYTe.service';

@Component({
  selector: 'app-co-so-yte-ql',
  templateUrl: './co-so-yte-ql.component.html',
  styleUrls: ['./co-so-yte-ql.component.css']
})
export class CoSoYteQlComponent implements OnInit {
  sessionuser: any;
  tenCSYT;
  constructor(
    private route: Router,
    private coSoYTeService: CoSoYTeService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.coSoYTeIdTaiKhoan();
  }
  coSoYTeIdTaiKhoan() {
    this.sessionuser = this.sessionService.getToken();
    this.coSoYTeService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.tenCSYT = res.data.TenCoSoYTe;
    });
  }
  LogOut() {
    sessionStorage.removeItem('session');
    this.route.navigate(['/login']);
  }
}
