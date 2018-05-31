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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoSoYteQlRoutingModule { }
