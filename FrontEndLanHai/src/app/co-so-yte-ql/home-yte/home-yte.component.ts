import { Component, OnInit } from '@angular/core';
import { NguoiDungService } from '../../shared/Service/NguoiDungService';
import { DichVuService } from '../../shared/Service/DichVu.service';
import { PhieuHenKhamService } from '../../shared/Service/PhieuHenKham.service';
import { SucKhoeThuCungComponent } from '../../nguoi-dung/co-so-thu-yfor-nguoi-dung/suc-khoe-thu-cung/suc-khoe-thu-cung.component';
import { SucKhoeThuCungService } from '../../shared/Service/SucKhoeThuCung.service';
import { HoatDongService } from '../../shared/Service/HoatDong.service';

@Component({
  selector: 'app-home-yte',
  templateUrl: './home-yte.component.html',
  styleUrls: ['./home-yte.component.css']
})
export class HomeYteComponent implements OnInit {

  constructor(
    private nguoiDungService: NguoiDungService,
    private dichVuService: DichVuService,
    private phieuHenKhamService: PhieuHenKhamService,
    private sucKhoeThuCung: SucKhoeThuCungService,
    private hoatDongService: HoatDongService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.nguoiDungService.nguoiDungListVoiCSYT();
    this.dichVuService.dichVuListVoiForTrueCSYT();
    this.phieuHenKhamService.phieuHenKhamListVoiCSYT();
    this.sucKhoeThuCung.sucKhoeThuCungListVoiCSYT();
    this.hoatDongService.hoatDongListVoiForTrueCSYT();
  }


}
