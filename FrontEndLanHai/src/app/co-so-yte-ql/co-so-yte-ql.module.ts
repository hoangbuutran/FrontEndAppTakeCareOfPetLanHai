import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoSoYteQlRoutingModule } from './co-so-yte-ql-routing.module';
import { CoSoYteQlComponent } from './co-so-yte-ql.component';
import { HomeYteComponent } from './home-yte/home-yte.component';

@NgModule({
  imports: [
    CommonModule,
    CoSoYteQlRoutingModule
  ],
  declarations: [CoSoYteQlComponent, HomeYteComponent]
})
export class CoSoYteQlModule { }
