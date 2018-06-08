import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ThuCungModel } from '../Model/ThuCung.model';
import { SessionService } from './session.service';
import { CoSoYTeService } from './CoSoYTe.service';

@Injectable()

export class ThuCungService {
    sessionuser: any;
    idTaiKhoan: number;
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private coSoYTeService: CoSoYTeService,
    ) { }

    thuCungListProperty: ThuCungModel[];
    listThuCungWithIdNguoiDung: ThuCungModel[];
    url: string;

    create(thuCung: any): Observable<any> {
        this.url = 'http://localhost:57777/api/thucung/create';
        return this.apiService.post(this.url, thuCung);
    }

    KhoaMo(thuCungId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/thucung/khoamo/' + thuCungId;
        return this.apiService.get(this.url);
    }

    delete(thuCungId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/thucung/delete/' + thuCungId;
        return this.apiService.get(this.url);
    }
    Update(thuCung: ThuCungModel) {
        this.url = 'http://localhost:57777/api/thucung/update';
        return this.apiService.put(this.url, thuCung);
    }

    view(thuCungId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/thucung/getbyid/' + thuCungId;
        return this.apiService.get(this.url);
    }

    viewthuCungVoiIdNguoiDung(idNguoiDung: number | string) {
        this.url = 'http://localhost:57777/api/thucung/getbyidnguoidung/' + idNguoiDung;
        return this.apiService.get(this.url).subscribe(res => {
            this.listThuCungWithIdNguoiDung = res.data;
        });
    }

    countthuCung(): Observable<any> {
        this.url = 'http://localhost:57777/api/thucung/listcountthucung';
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    // thuCungListVoiCSYT() {
    //     this.sessionuser = this.sessionService.getToken();
    //     this.coSoYTeService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
    //       this.viewthuCungVoiIdNguoiDung(res.data.IdCoSoYTe).subscribe(res1 => {
    //         this.thuCungListProperty = res1.data;
    //       });
    //     }
    //     );
    // }

    thuCungList() {
        this.url = 'http://localhost:57777/api/thucung/getall';
        this.apiService.get(this.url).subscribe(res => {
            this.thuCungListProperty = res.data;
        });
    }
}
