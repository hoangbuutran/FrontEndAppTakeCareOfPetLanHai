import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoSoYteComponent } from './co-so-yte.component';
import { CoSoYteAddComponent } from './co-so-yte-add/co-so-yte-add.component';
import { CoSoYteListComponent } from './co-so-yte-list/co-so-yte-list.component';
import { CoSoYteEditComponent } from './co-so-yte-edit/co-so-yte-edit.component';
import { CoSoYteDetailComponent } from './co-so-yte-detail/co-so-yte-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CoSoYteComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: CoSoYteAddComponent },
      { path: 'list', component: CoSoYteListComponent },
      { path: 'edit/:IdCoSoYTe', component: CoSoYteEditComponent },
      { path: 'detail/:IdCoSoYTe', component: CoSoYteDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoSoYteRoutingModule { }
