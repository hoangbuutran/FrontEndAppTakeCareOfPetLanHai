import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PhieuHenKhamService } from '../../../shared/Service/PhieuHenKham.service';
import { DichVuService } from '../../../shared/Service/DichVu.service';
import { NguoiDungService } from '../../../shared/Service/NguoiDungService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qlphieu-hen-kham-detail',
  templateUrl: './qlphieu-hen-kham-detail.component.html',
  styleUrls: ['./qlphieu-hen-kham-detail.component.css']
})
export class QlphieuHenKhamDetailComponent implements OnInit {
  id = '';
  IdLichHenKhamDetail: any;
  IdNguoiDungDetail: any;
  tenNguoiDungDetail: any;
  IdCoSoThuYDetail: any;
  NgayHenKhamDetail: any;
  GioHenKhamDetail: any;
  LyDoHenKhamDetail: any;
  IdDichVuDetail: any;
  tenDichVuDetail: any;
  TinhTrangDetail: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private phieuHenKhamService: PhieuHenKhamService,
    private dichVuService: DichVuService,
    private nguoiDungService: NguoiDungService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdLichHenKham');
    });
    this.loadForm();
  }

  loadForm() {
    this.phieuHenKhamService.view(this.id).subscribe(res => {
      this.IdLichHenKhamDetail = res.data.IdLichHenKham;
      this.IdNguoiDungDetail = res.data.IdNguoiDung;
      this.IdCoSoThuYDetail = res.data.IdCoSoThuY;
      this.NgayHenKhamDetail = res.data.NgayHenKham;
      this.GioHenKhamDetail = res.data.GioHenKham;
      this.LyDoHenKhamDetail = res.data.LyDoHenKham;
      this.IdDichVuDetail = res.data.IdDichVu;
      this.TinhTrangDetail = res.data.TinhTrang;

      this.dichVuService.view(this.IdDichVuDetail).subscribe(res => {
        this.tenDichVuDetail = res.data.TenDichVu;
      });
      this.nguoiDungService.view(this.IdNguoiDungDetail).subscribe(res => {
        this.tenNguoiDungDetail = res.data.TenNguoiDung;
      });
    });
  }

  duyetPhieu(idPhieu: any) {
    this.phieuHenKhamService.duyetPhieuHenKham(idPhieu).subscribe(res => {
      this.toastr.success('Phiếu đã được duyệt thành công','thông báo');
      this.loadForm();
    });
  }
  
  removePhieu(idPhieu: any) {
    if(confirm('Bạn có chắc chắn muốn hủy phiếu ?') === true){
      this.phieuHenKhamService.tuChoiPhieuHenKham(idPhieu).subscribe(res => {
        this.toastr.success('Xoa thanh cong phieu hen kham','thông báo');
        this.phieuHenKhamService.phieuHenKhamListVoiCSYT();
        this.router.navigate(['/cosoyteql/qlphieuhenkham/list']);
      });
    }
  }
}
