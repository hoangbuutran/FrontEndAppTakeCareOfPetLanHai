import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoSoYteQlRoutingModule } from './co-so-yte-ql-routing.module';
import { CoSoYteQlComponent } from './co-so-yte-ql.component';
import { HomeYteComponent } from './home-yte/home-yte.component';
import { ChangePassCstyComponent } from './change-pass-csty/change-pass-csty.component';
import { ChangeProfileCstyComponent } from './change-profile-csty/change-profile-csty.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoSoYteQlRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CoSoYteQlComponent, HomeYteComponent, ChangePassCstyComponent, ChangeProfileCstyComponent]
})
export class CoSoYteQlModule { }
