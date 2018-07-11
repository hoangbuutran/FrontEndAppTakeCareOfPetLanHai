import { Component, OnInit } from '@angular/core';
import { SanPhamService } from '../../../shared/Service/SanPham.service';

@Component({
  selector: 'app-home-kenh-nguoi-ban',
  templateUrl: './home-kenh-nguoi-ban.component.html',
  styleUrls: ['./home-kenh-nguoi-ban.component.css']
})
export class HomeKenhNguoiBanComponent implements OnInit {
  listLoaiSanPhamVoiSanPham: any;
  constructor(
    private sanPhamService: SanPhamService,
  ) { }

  ngOnInit() {
    this.sanPhamService.viewLoaiSanPhamVoiSanPham().subscribe(res => {
      this.listLoaiSanPhamVoiSanPham = res.data;
    });
    
  }

}
