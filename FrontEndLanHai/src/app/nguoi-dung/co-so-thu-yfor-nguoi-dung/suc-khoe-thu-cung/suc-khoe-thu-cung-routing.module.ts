import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucKhoeThuCungComponent } from './suc-khoe-thu-cung.component';
import { SucKhoeThuCungHomeComponent } from './suc-khoe-thu-cung-home/suc-khoe-thu-cung-home.component';
import { SucKhoeThuCungListComponent } from './suc-khoe-thu-cung-list/suc-khoe-thu-cung-list.component';

const routes: Routes = [
  {
    path: '',
    component: SucKhoeThuCungComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: SucKhoeThuCungHomeComponent },
      { path: 'detail', component: SucKhoeThuCungListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucKhoeThuCungRoutingModule { }
