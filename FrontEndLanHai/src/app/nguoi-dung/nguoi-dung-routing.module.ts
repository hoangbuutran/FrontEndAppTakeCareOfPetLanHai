import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNguoiDungComponent } from './home-nguoi-dung/home-nguoi-dung.component';
import { NguoiDungComponent } from './nguoi-dung.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: NguoiDungComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeNguoiDungComponent },
      { path: 'cart', component: CartComponent },
      { path: 'kenhnguoiban', loadChildren: './kenh-nguoi-ban/kenh-nguoi-ban.module#KenhNguoiBanModule' },
      { path: 'kenhcuashop/:IdShop', loadChildren: './view-shop-ban-hang/view-shop-ban-hang.module#ViewShopBanHangModule' },
      { path: 'nguoidungprofile', loadChildren: './nguoi-dung-profile/nguoi-dung-profile.module#NguoiDungProfileModule' },
      { path: 'thucungnguoidung', loadChildren: './thu-cung-nguoi-dung/thu-cung-nguoi-dung.module#ThuCungNguoiDungModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NguoiDungRoutingModule { }
