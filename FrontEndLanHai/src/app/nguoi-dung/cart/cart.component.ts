import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../shared/Model/ShoppingCart.model';
import { Observable } from 'rxjs/Observable';
import { SanPhamModel } from '../../shared/Model/SanPham.model';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { CartItem } from '../../shared/Model/CartItem.model';
import { ShoppingCartService } from '../../shared/Service/ShoppingCart.service';
import { SanPhamService } from '../../shared/Service/SanPham.service';
import { Router } from '@angular/router';
import { ViewCartModel } from '../../shared/Model/ViewCart.model';

interface ICartItemWithProduct extends CartItem {
  product: SanPhamModel;
  cartItems: CartItem;
}



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  tongTienGioHang = 0;
  public cart: Observable<ShoppingCart>;
  private cartSubscription: Subscription;
  listViewCart = [];
  constructor(
    private shoppingCartService: ShoppingCartService,
    private sanPhamService: SanPhamService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart2) => {
      cart2.items.forEach(element => {
        this.sanPhamService.view(element.IdSanPham).subscribe(res => {
          const viewcart = new ViewCartModel();
          viewcart.IdSanPham = element.IdSanPham;
          viewcart.TenSanPham = res.data.TenSanPham;
          viewcart.SoLuong = element.SoLuong;
          viewcart.Gia = element.Gia;
          viewcart.tongTien = element.tongTien;
          this.listViewCart.push(viewcart);
          this.tongTienGioHang = this.tongTienGioHang + element.tongTien
        });
      });
    });
  }



  public emptyCart(): void {
    this.shoppingCartService.empty();
    this.listViewCart = [];
    this.tongTienGioHang = 0;
  }

  xemSanPham(IdSanPham: number | string) {
    console.log(IdSanPham);
  }

  removeSanPham(IdSanPham: number | string) {
    this.sanPhamService.view(IdSanPham).subscribe(res => {
      this.shoppingCartService.addItem(res.data, -1);
      this.listViewCart = [];
      this.tongTienGioHang = 0;
    });
  }

  thanhToan(idNguoiDung: number | string) {
    if (this.listViewCart.length === 0) {
      alert('giỏ hang khong co san pham nao');
    } else {
      if (confirm('Bạn có chắc chắn mua sản phẩm trong giỏ ?') === true) {
        this.shoppingCartService.empty();
        this.listViewCart = [];
      }
    }
  }

}
