import { Component, OnInit } from '@angular/core';
import { QuyenService } from '../../shared/Service/Quyen.service';
import { GiongThuCungService } from '../../shared/Service/GiongThuCung.service';
import { ChuyenMucService } from '../../shared/Service/ChuyenMuc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countChuyenMuc;
  countGiongThuCung;
  countQuyen;
  constructor(
    private quyenService: QuyenService,
    private giongThuCungService: GiongThuCungService,
    private chuyenMucService: ChuyenMucService,
  ) { }

  ngOnInit() {
    this.quyenService.countQuyen().subscribe(data => this.countQuyen = data);
    this.giongThuCungService.countgiongthucung().subscribe(res => this.countGiongThuCung = res.data);
    this.chuyenMucService.countchuyenMuc().subscribe(res => this.countChuyenMuc = res.data);
  }
}
