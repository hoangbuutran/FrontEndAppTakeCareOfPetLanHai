import { Component, OnInit } from '@angular/core';
import { SanPhamService } from '../../../shared/Service/SanPham.service';
import { SanPhamModel } from '../../../shared/Model/SanPham.model';
import { ShoppingCartService } from '../../../shared/Service/ShoppingCart.service';
import { ToastrService } from 'ngx-toastr';
import { LinkServerModel } from '../../../shared/Model/LinkServer.model';

@Component({
  selector: 'app-home-kenh-nguoi-ban',
  templateUrl: './home-kenh-nguoi-ban.component.html',
  styleUrls: ['./home-kenh-nguoi-ban.component.css']
})
export class HomeKenhNguoiBanComponent implements OnInit {
  listLoaiSanPhamVoiSanPham: any;
  urlServer = LinkServerModel.URL;
  constructor(
    private sanPhamService: SanPhamService,
    private shoppingCartService: ShoppingCartService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.sanPhamService.viewLoaiSanPhamVoiSanPham().subscribe(res => {
      this.listLoaiSanPhamVoiSanPham = res.data;
    });

  }

  public addProductToCart(product: SanPhamModel): void {
    this.toastr.success('sản phẩm đã được thêm vào giỏ', 'Thông báo');
    this.shoppingCartService.addItem(product, 1);
  }
}
