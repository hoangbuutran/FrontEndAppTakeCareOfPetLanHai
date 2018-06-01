import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KhachHangComponent } from './khach-hang.component';
import { KhachHangDetailComponent } from './khach-hang-detail/khach-hang-detail.component';
import { KhachHangListComponent } from './khach-hang-list/khach-hang-list.component';

const routes: Routes = [
  {
    path: '',
    component: KhachHangComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: KhachHangListComponent },
      { path: 'detail/:IdChuyenMuc', component: KhachHangDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KhachHangRoutingModule { }
