import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/Service/session.service';
import { SanPhamService } from '../../shared/Service/SanPham.service';
import { LoaiSanPhamService } from '../../shared/Service/LoaiSanPham.service';
import { ShopService } from '../../shared/Service/Shop.service';

@Component({
  selector: 'app-home-shop',
  templateUrl: './home-shop.component.html',
  styleUrls: ['./home-shop.component.css']
})
export class HomeShopComponent implements OnInit {
  sessionuser;
  idShop;
  countSanPham;
  countLoaiSanPham;
  countHoaDon = 11;
  constructor(
    private sessionService: SessionService,
    private sanPhamService: SanPhamService,
    private loaiSanPhamService: LoaiSanPhamService,
    private shopService: ShopService,
  ) { }

  ngOnInit() {
    this.sessionuser = this.sessionService.getToken();
    this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
      this.sanPhamService.countSanPham(res.data.IdShop).subscribe(res => this.countSanPham = res.data);
      this.loaiSanPhamService.countLoaiSanPham(res.data.IdShop).subscribe(res => this.countLoaiSanPham = res.data);
    });
    
  }
}
