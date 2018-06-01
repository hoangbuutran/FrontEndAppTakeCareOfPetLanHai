import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoSoYteQlComponent } from './co-so-yte-ql.component';
import { HomeYteComponent } from './home-yte/home-yte.component';

const routes: Routes = [
  {
    path: '',
    component: CoSoYteQlComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeYteComponent },
      { path: 'khachhang', loadChildren: './khach-hang/khach-hang.module#KhachHangModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoSoYteQlRoutingModule { }
