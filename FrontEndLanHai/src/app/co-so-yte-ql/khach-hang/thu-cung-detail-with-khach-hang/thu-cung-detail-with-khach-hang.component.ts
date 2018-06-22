import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ThuCungService } from '../../../shared/Service/ThuCung.service';
import { CanNangService } from '../../../shared/Service/CanNang.service';
import { TinhTrangService } from '../../../shared/Service/TinhTrang.service';
import { ThuCungModel } from '../../../shared/Model/ThuCung.model';

@Component({
  selector: 'app-thu-cung-detail-with-khach-hang',
  templateUrl: './thu-cung-detail-with-khach-hang.component.html',
  styleUrls: ['./thu-cung-detail-with-khach-hang.component.css']
})
export class ThuCungDetailWithKhachHangComponent implements OnInit {
  id = '';
  TenThuongGoiDetail;
  NgayNuoiDetail;
  TenGiongThuCungDetail;

  hinhAnhDetail;
  noiDungTinhTrangDetail;
  constructor(
    private route: ActivatedRoute,
    private thuCungService: ThuCungService,
    private canNangService: CanNangService,
    private tinhTrangService: TinhTrangService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdThuCung');
    });
    this.canNangService.viewcanNangVoiIdThuCung(this.id);
    this.tinhTrangService.viewtinhTrangVoiIdThuCung(this.id);
    this.thuCungService.view(this.id).subscribe(res => {
      this.TenThuongGoiDetail = res.data.TenThuongGoi;
      this.NgayNuoiDetail = res.data.NgayNuoi;
      this.TenGiongThuCungDetail = res.data.GiongThuCung.TenGiongThuCung;
    });

  }

  XemThongTinTinhTrang(IdTinhTrang: number) {
    this.tinhTrangService.view(IdTinhTrang).subscribe(res => {
      this.hinhAnhDetail = 'http://takecareofthepet.somee.com/Images/' + res.data.HinhAnh;
      this.noiDungTinhTrangDetail = res.data.NoiDungTinhTrang;
    });
  }
}
