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
  public cart: Observable<ShoppingCart>;
  private products = [];
  private cartSubscription: Subscription;
  listCthd = [];
  constructor(
    private shoppingCartService: ShoppingCartService,
    private sanPhamService: SanPhamService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart2) => {
      cart2.items.forEach(element => {
        this.listCthd.push(element);
        this.sanPhamService.view(element.IdSanPham).subscribe(res => {
          this.products.push(res.data);
        });
      });
    });
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
    this.products = [];
    this.listCthd = [];
  }

  thanhToan(idNguoiDung: number | string) {
    if (this.products.length === 0) {
      alert('giỏ hang khong co san pham nao');
    } else {
      alert('giỏ hang da duoc thanh toan');
    }

  }

}
