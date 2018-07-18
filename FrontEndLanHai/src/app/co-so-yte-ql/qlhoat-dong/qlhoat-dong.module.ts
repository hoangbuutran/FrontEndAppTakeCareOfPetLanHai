import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QlhoatDongRoutingModule } from './qlhoat-dong-routing.module';
import { QlhoatDongComponent } from './qlhoat-dong.component';
import { QlhoatDongListComponent } from './qlhoat-dong-list/qlhoat-dong-list.component';
import { QlhoatDongAddComponent } from './qlhoat-dong-add/qlhoat-dong-add.component';
import { QlhoatDongEditComponent } from './qlhoat-dong-edit/qlhoat-dong-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    QlhoatDongRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  declarations: [QlhoatDongComponent, QlhoatDongListComponent, QlhoatDongAddComponent, QlhoatDongEditComponent]
})
export class QlhoatDongModule { }
