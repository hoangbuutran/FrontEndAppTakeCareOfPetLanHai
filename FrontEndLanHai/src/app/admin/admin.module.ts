import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule
  ],
  declarations: [AdminComponent, HomeComponent, ErrorComponent]
})
export class AdminModule { }
