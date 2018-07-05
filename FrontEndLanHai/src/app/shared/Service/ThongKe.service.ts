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
import { ShopService } from './Shop.service';

@Injectable()

export class ThongKeService {
    thongKeListProperty;
    sessionuser: any;
    idTaiKhoan: number;
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private shopService: ShopService
    ) { }

    url: string;

    viewThongKeVoiIdShop(idShop: number) {
        this.url = 'http://takecareofthepet.somee.com/api/thongke/getbyidshop/' + idShop;
        return this.apiService.get(this.url);
    }

    thongKeListWithIdShop() {
        this.sessionuser = this.sessionService.getToken();
        this.shopService.viewShopVoiIDTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewThongKeVoiIdShop(res.data.IdShop).subscribe(res1 => {
                this.thongKeListProperty = res1.data;
            });
        });
    }
}
