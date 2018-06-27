import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ChiTietHoaDonModel } from '../../../shared/Model/ChiTietHoaDon.model';
import { HoaDonService } from '../../../shared/Service/HoaDon.service';
import { SanPhamService } from '../../../shared/Service/SanPham.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hoa-don-detail',
  templateUrl: './hoa-don-detail.component.html',
  styleUrls: ['./hoa-don-detail.component.css']
})
export class HoaDonDetailComponent implements OnInit {
  id: any;
  listCTHD: any;
  listSanPham: any[] = [];
  trangThai: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private toastr: ToastrService,
    private hoaDonService: HoaDonService,
    private sanPhamService: SanPhamService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdHoaDon');
    });
    this.hoaDonService.viewCTHoaDonVoiIdHoaDon(this.id).subscribe(
      res => {
        this.listCTHD = res.data;
      }
    );
    this.hoaDonService.view(this.id).subscribe(
      res => {
        this.trangThai = res.data.TrangThai;
        
      }
    );
  }

  duyetDonHang() {
    this.hoaDonService.updateTrangThai(this.id).subscribe(
      res => {
        this.toastr.success('Hóa đơn đã được duyệt', 'Thông báo');
        this.router.navigate(['/shop/hoadon/view/' + this.id]);
      }
    );
  }
}
