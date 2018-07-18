import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { ShopModel } from '../Model/Shop.model';

@Injectable()

export class ShopService {
    sessionuser: any;
    idTaiKhoan: number;
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
    ) { }
    shopListProperty: ShopModel[];
    shopListForTrueProperty: ShopModel[];
    url: string;

    create(shop: any): Observable<any> {
        this.url = 'http://localhost:1650/api/shop/create';
        return this.apiService.post(this.url, shop);
    }

    KhoaMo(shopId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/shop/khoamo/' + shopId;
        return this.apiService.get(this.url);
    }

    delete(shopId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/shop/delete/' + shopId;
        return this.apiService.get(this.url);
    }
    Update(shop: ShopModel) {
        this.url = 'http://localhost:1650/api/shop/update';
        return this.apiService.put(this.url, shop);
    }

    view(shopId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/shop/getbyid/' + shopId;
        return this.apiService.get(this.url);
    }

    viewListShop() {
        this.url = 'http://localhost:1650/api/shop/getall';
        this.apiService.get(this.url).subscribe(res => {
            this.shopListProperty = res.data;
        });
    }

    viewListShopForTrue() {
        this.url = 'http://localhost:1650/api/shop/getall';
        this.apiService.get(this.url).subscribe(res => {
            this.shopListForTrueProperty = res.data;
        });
    }

    viewShopVoiIDTaiKhoan(taiKhoanId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/shop/getbyidtaikhoan/' + taiKhoanId;
        return this.apiService.get(this.url);
    }
    xemTaiKhoanShop(ShopId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/taikhoan/getbyid/' + ShopId;
        return this.apiService.get(this.url);
    }
    countshop(): Observable<any> {
        this.url = 'http://localhost:1650/api/shop/listcountshop';
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }
}
