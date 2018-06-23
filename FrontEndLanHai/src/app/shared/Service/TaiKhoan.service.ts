import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { LoginModel } from '../Model/Login.model';
import { TaiKhoanModel } from '../Model/TaiKhoan.model';


@Injectable()

export class TaiKhoanService {
    constructor(
        private apiService: ApiService,
    ) { }
    url: string;

    Login(loginModel: LoginModel) {
        this.url = 'http://takecareofthepet.somee.com/api/taikhoan/login';
        return this.apiService.post(this.url, loginModel);
    }

    view(taiKhoanId: number | string) {
        this.url = 'http://takecareofthepet.somee.com/api/taikhoan/getbyid/' + taiKhoanId;
        return this.apiService.get(this.url);
    }
    
    ChangePass(ChangePassModel: any) {
        this.url = 'http://takecareofthepet.somee.com/api/taikhoan/doimatkhau';
        return this.apiService.post(this.url, ChangePassModel);
    }
}
