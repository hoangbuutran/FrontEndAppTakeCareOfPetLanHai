import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoSoThuYforNguoiDungRoutingModule } from './co-so-thu-yfor-nguoi-dung-routing.module';
import { CoSoThuYforNguoiDungComponent } from './co-so-thu-yfor-nguoi-dung.component';
import { CoSoThuYhomeComponent } from './co-so-thu-yhome/co-so-thu-yhome.component';
import { DatLichKhamComponent } from './dat-lich-kham/dat-lich-kham.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HoatDongComponent } from './hoat-dong/hoat-dong.component';
import { EscapeHtmlPipeGioiThieuCSTY } from '../../shared/Pipe/EscapeHtmlPipeGioiThieuCSTY.pipe';

@NgModule({
  imports: [
    CommonModule,
    CoSoThuYforNguoiDungRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [CoSoThuYforNguoiDungComponent, CoSoThuYhomeComponent, DatLichKhamComponent, EscapeHtmlPipeGioiThieuCSTY]
})
export class CoSoThuYforNguoiDungModule { }
