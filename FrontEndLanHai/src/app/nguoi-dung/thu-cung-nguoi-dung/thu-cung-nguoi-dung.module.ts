import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThuCungNguoiDungRoutingModule } from './thu-cung-nguoi-dung-routing.module';
import { ThuCungNguoiDungComponent } from './thu-cung-nguoi-dung.component';
import { ThuCungNguoiDungHomeComponent } from './thu-cung-nguoi-dung-home/thu-cung-nguoi-dung-home.component';

@NgModule({
  imports: [
    CommonModule,
    ThuCungNguoiDungRoutingModule
  ],
  declarations: [ThuCungNguoiDungComponent, ThuCungNguoiDungHomeComponent]
})
export class ThuCungNguoiDungModule { }
