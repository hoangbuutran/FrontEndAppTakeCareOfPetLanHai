import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoaiSanPhamService } from '../../shared/Service/LoaiSanPham.service';
import { LoaiSanPhamModel } from '../../shared/Model/LoaiSanPham.model';

@Component({
  selector: 'app-view-shop-ban-hang',
  templateUrl: './view-shop-ban-hang.component.html',
  styleUrls: ['./view-shop-ban-hang.component.css']
})
export class ViewShopBanHangComponent implements OnInit {

  idShop = '';
  loaiSanPhamListForTrueProperty: LoaiSanPhamModel[];
  constructor(
    private route: ActivatedRoute,
    private loaiSanPhamService: LoaiSanPhamService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idShop = params.get('IdShop');
    });
    this.loaiSanPhamService.viewForTrue(this.idShop).subscribe(res => {
      this.loaiSanPhamListForTrueProperty = res.data;
    });
  }

}
