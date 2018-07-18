import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DichVuComponent } from './dich-vu.component';
import { DichVuHomeComponent } from './dich-vu-home/dich-vu-home.component';
import { DichVuDetailComponent } from './dich-vu-detail/dich-vu-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DichVuComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DichVuHomeComponent },
      { path: 'detail', component: DichVuDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DichVuRoutingModule { }
