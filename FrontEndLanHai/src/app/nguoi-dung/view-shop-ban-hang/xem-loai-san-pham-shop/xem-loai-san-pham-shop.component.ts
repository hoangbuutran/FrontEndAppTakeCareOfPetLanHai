import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SanPhamService } from '../../../shared/Service/SanPham.service';

@Component({
  selector: 'app-xem-loai-san-pham-shop',
  templateUrl: './xem-loai-san-pham-shop.component.html',
  styleUrls: ['./xem-loai-san-pham-shop.component.css']
})
export class XemLoaiSanPhamShopComponent implements OnInit {

  idShop: any;
  idLoaiSanPham: any;
  listSanPhamVoiIdLoaiSanPham: any;

  constructor(
    private route: ActivatedRoute,
    private sanPhamService: SanPhamService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idShop = params.get('IdShop');
      this.idLoaiSanPham = params.get('IdLoaiSanPham');
      console.log('co load ngoninit');
      this.loadLaiTrang(this.idLoaiSanPham);
    });
  }

  loadLaiTrang(idLoaiSanPham: any) {
    console.log('co load trang');
    this.sanPhamService.viewSanPhamVoiIdLoaiSanPham(idLoaiSanPham).subscribe(res => {
      this.listSanPhamVoiIdLoaiSanPham = res.data;
    });

  }
}
