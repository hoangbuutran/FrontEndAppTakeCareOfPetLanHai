import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoSoYteRoutingModule } from './co-so-yte-routing.module';
import { CoSoYteComponent } from './co-so-yte.component';
import { CoSoYteListComponent } from './co-so-yte-list/co-so-yte-list.component';
import { CoSoYteAddComponent } from './co-so-yte-add/co-so-yte-add.component';
import { CoSoYteEditComponent } from './co-so-yte-edit/co-so-yte-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoSoYteDetailComponent } from './co-so-yte-detail/co-so-yte-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CoSoYteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [CoSoYteComponent, CoSoYteListComponent, CoSoYteAddComponent, CoSoYteEditComponent, CoSoYteDetailComponent]
})
export class CoSoYteModule { }
