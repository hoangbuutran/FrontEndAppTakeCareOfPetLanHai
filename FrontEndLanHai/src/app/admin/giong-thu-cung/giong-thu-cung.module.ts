import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiongThuCungRoutingModule } from './giong-thu-cung-routing.module';
import { GiongThuCungComponent } from './giong-thu-cung.component';
import { GiongThuCungListComponent } from './giong-thu-cung-list/giong-thu-cung-list.component';
import { GiongThuCungAddComponent } from './giong-thu-cung-add/giong-thu-cung-add.component';
import { GiongThuCungEditComponent } from './giong-thu-cung-edit/giong-thu-cung-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    GiongThuCungRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [GiongThuCungComponent, GiongThuCungListComponent, GiongThuCungAddComponent, GiongThuCungEditComponent]
})
export class GiongThuCungModule { }
