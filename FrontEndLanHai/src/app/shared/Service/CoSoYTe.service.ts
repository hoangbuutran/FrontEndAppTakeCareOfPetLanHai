import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { CoSoYTeModel } from '../Model/CoSoYTe.model';

@Injectable()

export class CoSoYTeService {
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient
    ) { }
    coSoYTeListProperty: CoSoYTeModel[];

    url: string;

    create(coSoYTe: any): Observable<any> {
        this.url = 'http://localhost:57777/api/cosoyte/create';
        return this.apiService.post(this.url, coSoYTe);
    }

    KhoaMo(coSoYTeId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/cosoyte/khoamo/' + coSoYTeId;
        return this.apiService.get(this.url);
    }

    delete(coSoYTeId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/cosoyte/delete/' + coSoYTeId;
        return this.apiService.get(this.url);
    }
    Update(coSoYTe: CoSoYTeModel) {
        this.url = 'http://localhost:57777/api/cosoyte/update';
        return this.apiService.put(this.url, coSoYTe);
    }

    view(coSoYTeId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/cosoyte/getbyid/' + coSoYTeId;
        return this.apiService.get(this.url);
    }

    countCoSoYTe(): Observable<any> {
        this.url = 'http://localhost:57777/api/cosoyte/listcountcosoyte';
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    xemTaiKhoanCoSoYTe(coSoYTeId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/taikhoan/getbyid/' + coSoYTeId;
        return this.apiService.get(this.url);
    }

    coSoYTeList() {
        this.url = 'http://localhost:57777/api/cosoyte/getall';
        this.apiService.get(this.url).subscribe(res => {
            this.coSoYTeListProperty = res.data;
        });
    }
}
