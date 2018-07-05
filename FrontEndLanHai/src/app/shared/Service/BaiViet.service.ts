import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { BaiVietModel } from '../Model/BaiViet.model';

@Injectable()

export class BaiVietService {
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
    ) { }

    listBaiVietWithIdNguoiDung: BaiVietModel[];
    listBaiViet: BaiVietModel[];
    url: string;
    
    create(baiViet: any): Observable<any> {
        this.url = 'http://takecareofthepet.somee.com/api/baiviet/create';
        return this.apiService.post(this.url, baiViet);
    }

    delete(baiVietId: number | string): Observable<any> {
        this.url = 'http://takecareofthepet.somee.com/api/baiviet/delete/' + baiVietId;
        return this.apiService.get(this.url);
    }

    view(baiVietId: number | string): Observable<any> {
        this.url = 'http://takecareofthepet.somee.com/api/baiviet/getbyid/' + baiVietId;
        return this.apiService.get(this.url);
    }

    KhoaMo(baivietId: number | string): Observable<any> {
        this.url = 'http://takecareofthepet.somee.com/api/baiviet/khoamo/' + baivietId;
        return this.apiService.get(this.url);
    }


    Update(baiViet: BaiVietModel) {
        this.url = 'http://takecareofthepet.somee.com/api/baiviet/update';
        return this.apiService.put(this.url, baiViet);
    }

    viewbaiVietVoiIdNguoiDung(idNguoiDung: number | string) {
        this.url = 'http://takecareofthepet.somee.com/api/baiviet/getallbaiVietwithidBaiViet/' + idNguoiDung;
        return this.apiService.get(this.url).subscribe(res => {
            this.listBaiVietWithIdNguoiDung = res.data;
        });
    }
    
    viewListBaiViet() {
        this.url = 'http://takecareofthepet.somee.com/api/baiviet/getallbaiViet';
        return this.apiService.get(this.url).subscribe(res => {
            this.listBaiViet = res.data;
        });
    }

}