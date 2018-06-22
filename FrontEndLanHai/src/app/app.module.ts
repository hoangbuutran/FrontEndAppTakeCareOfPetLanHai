import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './shared/Service/api.service';
import { SessionService } from './shared/Service/session.service';
import { QuyenService } from './shared/Service/Quyen.service';
import { TaiKhoanService } from './shared/Service/TaiKhoan.service';
import { AuthGuard } from './shared/Service/Auth.guard.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiongThuCungService } from './shared/Service/GiongThuCung.service';
import { ChuyenMucService } from './shared/Service/ChuyenMuc.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CoSoThuYService } from './shared/Service/CoSoThuY.service';
import { NguoiDungService } from './shared/Service/NguoiDungService';
import { ThuCungService } from './shared/Service/ThuCung.service';
import { CanNangService } from './shared/Service/CanNang.service';
import { TinhTrangService } from './shared/Service/TinhTrang.service';
import { ShopService } from './shared/Service/Shop.service';
import { LoaiSanPhamService } from './shared/Service/LoaiSanPham.service';
import { SanPhamService } from './shared/Service/SanPham.service';
import { HoaDonService } from './shared/Service/HoaDon.service';
import { EscapeHtmlPipe } from './shared/Pipe/EscapeHtmlPipe.pipe';
import { HinhAnhSanPhamService } from './shared/Service/HinhAnhSanPham.service';
import { ErrorService } from './shared/Service/error.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
  ],
  providers: [
    ApiService,
    SessionService,
    QuyenService,
    ShopService,
    NguoiDungService,
    ThuCungService,
    CoSoThuYService,
    TaiKhoanService,
    HoaDonService,
    ErrorService,
    LoaiSanPhamService,
    SanPhamService,
    CanNangService,
    TinhTrangService,
    GiongThuCungService,
    ChuyenMucService,
    HinhAnhSanPhamService,
    AuthGuard,
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
