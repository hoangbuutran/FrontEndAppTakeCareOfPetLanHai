import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNguoiDungComponent } from './home-nguoi-dung/home-nguoi-dung.component';
import { NguoiDungComponent } from './nguoi-dung.component';

const routes: Routes = [
  {
    path: '',
    component: NguoiDungComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeNguoiDungComponent },
      { path: 'kenhnguoiban', loadChildren: './kenh-nguoi-ban/kenh-nguoi-ban.module#KenhNguoiBanModule' },
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
