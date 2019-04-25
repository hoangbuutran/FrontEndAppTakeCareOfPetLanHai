import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SessionService } from '../shared/Service/session.service';
import { NguoiDungService } from '../shared/Service/NguoiDungService';
import { LinkServerModel } from '../shared/Model/LinkServer.model';

@Component({
  selector: 'app-nguoi-dung',
  templateUrl: './nguoi-dung.component.html',
  styleUrls: ['./nguoi-dung.component.css']
})
export class NguoiDungComponent implements OnInit {

  idNguoiDung: any;
  tenNguoiDung: any;
  sessionuser: any;
  imageDaiDien: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
    private nguoiDungService: NguoiDungService,
  ) { }

  ngOnInit() {
    this.sessionuser = this.sessionService.getToken();
    this.nguoiDungService.viewNguoiDungVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.imageDaiDien = LinkServerModel.URL + 'Images/' + res.data.HinhAnh;
      this.idNguoiDung = res.data.IdNguoiDung;
      this.tenNguoiDung = res.data.TenNguoiDung;
    });
  }

  LogOut() {
    sessionStorage.removeItem('session');
    this.router.navigate(['/login']);
  }
}
