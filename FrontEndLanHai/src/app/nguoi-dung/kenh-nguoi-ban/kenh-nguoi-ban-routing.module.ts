import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KenhNguoiBanComponent } from './kenh-nguoi-ban.component';
import { HomeKenhNguoiBanComponent } from './home-kenh-nguoi-ban/home-kenh-nguoi-ban.component';
import { DangKyBanHangComponent } from './dang-ky-ban-hang/dang-ky-ban-hang.component';

const routes: Routes = [
  {
    path: '',
    component: KenhNguoiBanComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeKenhNguoiBanComponent },
      { path: 'dangkybanhang', component: DangKyBanHangComponent },
      // { path: 'edit/:IdLoaiSanPham', component: LoaiSanPhamEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KenhNguoiBanRoutingModule { }
