import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NguoiDungProfileComponent } from './nguoi-dung-profile.component';
import { NguoiDungProfileHomeComponent } from './nguoi-dung-profile-home/nguoi-dung-profile-home.component';
import { NguoiDungProfileEditComponent } from './nguoi-dung-profile-edit/nguoi-dung-profile-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NguoiDungProfileComponent,
    children: [
      { path: '', redirectTo: 'home/:IdNguoiDung', pathMatch: 'full' },
      { path: 'home/:IdNguoiDung', component: NguoiDungProfileHomeComponent },
      { path: 'edit/:IdNguoiDung', component: NguoiDungProfileEditComponent },
      // { path: 'edit/:IdLoaiSanPham', component: LoaiSanPhamEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NguoiDungProfileRoutingModule { }
