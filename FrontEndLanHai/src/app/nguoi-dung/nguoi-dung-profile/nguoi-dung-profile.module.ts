import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguoiDungProfileRoutingModule } from './nguoi-dung-profile-routing.module';
import { NguoiDungProfileComponent } from './nguoi-dung-profile.component';
import { NguoiDungProfileHomeComponent } from './nguoi-dung-profile-home/nguoi-dung-profile-home.component';
import { NguoiDungProfileEditComponent } from './nguoi-dung-profile-edit/nguoi-dung-profile-edit.component';
import { ChangePassNguoiDungComponent } from './change-pass-nguoi-dung/change-pass-nguoi-dung.component';

@NgModule({
  imports: [
    CommonModule,
    NguoiDungProfileRoutingModule
  ],
  declarations: [NguoiDungProfileComponent, NguoiDungProfileHomeComponent, NguoiDungProfileEditComponent, ChangePassNguoiDungComponent]
})
export class NguoiDungProfileModule { }
