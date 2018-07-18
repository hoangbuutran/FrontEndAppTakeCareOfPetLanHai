import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoatDongComponent } from './hoat-dong.component';
import { HoatDongHomeComponent } from './hoat-dong-home/hoat-dong-home.component';
import { HoatDongDetailComponent } from './hoat-dong-detail/hoat-dong-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HoatDongComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HoatDongHomeComponent },
      { path: 'detail', component: HoatDongDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoatDongRoutingModule { }
