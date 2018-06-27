import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguoiDungRoutingModule } from './nguoi-dung-routing.module';
import { NguoiDungComponent } from './nguoi-dung.component';
import { HomeNguoiDungComponent } from './home-nguoi-dung/home-nguoi-dung.component';

@NgModule({
  imports: [
    CommonModule,
    NguoiDungRoutingModule
  ],
  declarations: [NguoiDungComponent, HomeNguoiDungComponent]
})
export class NguoiDungModule { }
