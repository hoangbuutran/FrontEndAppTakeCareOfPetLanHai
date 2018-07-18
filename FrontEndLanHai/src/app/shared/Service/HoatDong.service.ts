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
import { CoSoThuYService } from './CoSoThuY.service';

@Injectable()

export class HoatDongService {

    sessionuser: any;
    idTaiKhoan: number;

    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private coSoThuYService: CoSoThuYService,
    ) { }

    hoatDongListProperty: any[];
    hoatDongForTrueListProperty: any[];
    url: string;

    create(hoatDong: any): Observable<any> {
        this.url = 'http://localhost:1650/api/hoat-dong/create';
        return this.apiService.post(this.url, hoatDong);
    }

    KhoaMo(hoatDongId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/hoat-dong/khoamo/' + hoatDongId;
        return this.apiService.get(this.url);
    }

    delete(hoatDongId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/hoat-dong/delete/' + hoatDongId;
        return this.apiService.get(this.url);
    }

    Update(hoatDong: any) {
        this.url = 'http://localhost:1650/api/hoat-dong/update';
        return this.apiService.put(this.url, hoatDong);
    }

    view(hoatDongId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/hoat-dong/get-by-id/' + hoatDongId;
        return this.apiService.get(this.url);
    }


    search(searchString: string): Observable<any[]> {
        this.url = 'http://localhost:1650/api/hoat-dong/search-key/' + searchString;
        return this.apiService.get(this.url);
    }

    viewhoatDongVoiCSYT(cSYTId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/hoat-dong/get-all-with-id-cosothuy/' + cSYTId;
        return this.apiService.get(this.url);
    }

    hoatDongListVoiCSYT() {
        this.sessionuser = this.sessionService.getToken();
        this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewhoatDongVoiCSYT(res.data.IdCoSoThuY).subscribe(res1 => {
                this.hoatDongListProperty = res1.data;
            });
        });
    }

    viewhoatDongForTrueVoiCSYT(cSYTId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/hoat-dong/get-all-with-id-cosothuy-for-true/' + cSYTId;
        return this.apiService.get(this.url);
    }

    hoatDongForTrueListVoiCSYT() {
        this.sessionuser = this.sessionService.getToken();
        this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewhoatDongForTrueVoiCSYT(res.data.IdCoSoThuY).subscribe(res1 => {
                this.hoatDongForTrueListProperty = res1.data;
            });
        });
    }
}
