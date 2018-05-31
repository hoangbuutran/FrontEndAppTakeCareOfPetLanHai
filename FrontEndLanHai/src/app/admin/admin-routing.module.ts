import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuyenModule } from './quyen/quyen.module';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'quyen', loadChildren: './quyen/quyen.module#QuyenModule' },
      { path: 'giongthucung', loadChildren: './giong-thu-cung/giong-thu-cung.module#GiongThuCungModule' },
      { path: 'chuyenmuc', loadChildren: './chuyen-muc/chuyen-muc.module#ChuyenMucModule' },
      { path: 'cosoyte', loadChildren: './co-so-yte/co-so-yte.module#CoSoYteModule' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
