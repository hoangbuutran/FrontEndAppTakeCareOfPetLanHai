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
import { CoSoYTeService } from './CoSoYTe.service';
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

    // viewShopVoiCSYT(cSYTId: number | string): Observable<any> {
    //     this.url = 'http://localhost:1650/api/shop/getallbyidcosoyte/' + cSYTId;
    //     return this.apiService.get(this.url);
    // }

    viewShopVoiIDTaiKhoan(taiKhoanId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/shop/getbyidtaikhoan/' + taiKhoanId;
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

    // shopListVoiCSYT() {
    //     this.sessionuser = this.sessionService.getToken();
    //     this.coSoYTeService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
    //       this.viewshopVoiCSYT(res.data.IdCoSoThuY).subscribe(res1 => {
    //         this.shopListProperty = res1.data;
    //       });
    //     });
    // }
}
