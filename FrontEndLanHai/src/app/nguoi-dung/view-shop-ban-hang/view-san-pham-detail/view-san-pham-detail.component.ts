import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { ShopService } from '../../../shared/Service/Shop.service';
import { LoaiSanPhamService } from '../../../shared/Service/LoaiSanPham.service';
import { SanPhamService } from '../../../shared/Service/SanPham.service';

@Component({
  selector: 'app-view-san-pham-detail',
  templateUrl: './view-san-pham-detail.component.html',
  styleUrls: ['./view-san-pham-detail.component.css']
})
export class ViewSanPhamDetailComponent implements OnInit {

  id = '';
  GiaDetail: any;
  DacDiemDetail: any;
  HinhAnhSanPhamsDetail: any;
  IdLoaiSanPhamDetail: any;
  TenLoaiSanPham: any;
  IdSanPhamDetail: any;
  IdShopDetail: any;
  TenShop: any;
  NgayNhapDetail: any;
  TenSanPhamDetail: any;
  constructor(
    private route: ActivatedRoute,
    private sanPhamService: SanPhamService,
    private loaiSanPhamService: LoaiSanPhamService,
    private shopService: ShopService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdSanPham');
    });
    this.sanPhamService.view(this.id).subscribe(res => {
      this.GiaDetail = res.data.Gia;
      this.DacDiemDetail = res.data.DacDiem;
      this.HinhAnhSanPhamsDetail = res.data.HinhAnhSanPhams;
      this.IdLoaiSanPhamDetail = res.data.IdLoaiSanPham;
      this.IdSanPhamDetail = res.data.IdSanPham;
      this.IdShopDetail = res.data.IdShop;
      this.TenSanPhamDetail = res.data.TenSanPham;
      this.loaiSanPhamService.view(this.IdLoaiSanPhamDetail).subscribe(res => {
        this.TenLoaiSanPham = res.data.TenLoaiSanPham;
      });
      this.shopService.view(this.IdShopDetail).subscribe(res => {
        this.TenShop = res.data.TenShop;
      });
    });
  }
}
