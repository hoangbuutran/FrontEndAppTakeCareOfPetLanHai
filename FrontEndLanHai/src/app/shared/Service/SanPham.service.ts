import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { SanPhamModel } from '../Model/SanPham.model';
import { SessionService } from './session.service';
import { ShopService } from './Shop.service';

@Injectable()

export class SanPhamService {
    sessionuser: any;
    idTaiKhoan: number;
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private shopService: ShopService
    ) { }
    sanPhamListProperty: SanPhamModel[];

    url: string;

    create(sanPham: any): Observable<any> {
        this.url = 'http://localhost:1650/api/sanpham/create';
        return this.apiService.post(this.url, sanPham);
    }

    KhoaMo(sanPhamId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/sanpham/khoamo/' + sanPhamId;
        return this.apiService.get(this.url);
    }

    delete(sanPhamId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/sanpham/delete/' + sanPhamId;
        return this.apiService.get(this.url);
    }
    Update(sanPham: SanPhamModel) {
        this.url = 'http://localhost:1650/api/sanpham/update';
        return this.apiService.put(this.url, sanPham);
    }

    view(sanPhamId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/sanpham/getbyid/' + sanPhamId;
        return this.apiService.get(this.url);
    }

    countSanPham(idShop: number): Observable<any> {
        this.url = 'http://localhost:1650/api/sanpham/listcountsanphamwithidshop/' + idShop;
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    viewSanPhamVoiIdShop(idShop: number) {
        this.url = 'http://localhost:1650/api/sanpham/getallbyidshop/' + idShop;
        return this.apiService.get(this.url);
    }

    sanPhamListWithIdShop() {
        this.sessionuser = this.sessionService.getToken();
        this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewSanPhamVoiIdShop(res.data.IdShop).subscribe(res1 => {
                this.sanPhamListProperty = res1.data;
            });
        });
    }
}
