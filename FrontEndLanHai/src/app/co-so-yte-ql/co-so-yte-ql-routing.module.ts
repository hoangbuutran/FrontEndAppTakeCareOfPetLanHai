import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoSoYteQlComponent } from './co-so-yte-ql.component';
import { HomeYteComponent } from './home-yte/home-yte.component';
import { ChangePassCstyComponent } from './change-pass-csty/change-pass-csty.component';
import { ChangeProfileCstyComponent } from './change-profile-csty/change-profile-csty.component';

const routes: Routes = [
  {
    path: '',
    component: CoSoYteQlComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeYteComponent },
      { path: 'khachhang', loadChildren: './khach-hang/khach-hang.module#KhachHangModule' },
      { path: 'changepass', component: ChangePassCstyComponent },
      { path: 'changeprofile/:IdCoSoThuY', component: ChangeProfileCstyComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoSoYteQlRoutingModule { }
