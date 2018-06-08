import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { TinhTrangModel } from '../Model/TinhTrang.model';
import { SessionService } from './session.service';
import { CoSoYTeService } from './CoSoYTe.service';

@Injectable()

export class TinhTrangService {
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
    ) { }

    tinhTrangListProperty: TinhTrangModel[];
    listtinhTrangWithIdThuCung: TinhTrangModel[];
    url: string;

    create(tinhTrang: any): Observable<any> {
        this.url = 'http://localhost:57777/api/tinhtrang/create';
        return this.apiService.post(this.url, tinhTrang);
    }

    KhoaMo(tinhTrangId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/tinhtrang/khoamo/' + tinhTrangId;
        return this.apiService.get(this.url);
    }

    delete(tinhTrangId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/tinhtrang/delete/' + tinhTrangId;
        return this.apiService.get(this.url);
    }
    Update(tinhTrang: TinhTrangModel) {
        this.url = 'http://localhost:57777/api/tinhtrang/update';
        return this.apiService.put(this.url, tinhTrang);
    }

    view(tinhTrangId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/tinhtrang/getbyid/' + tinhTrangId;
        return this.apiService.get(this.url);
    }

    viewtinhTrangVoiIdThuCung(idThuCung: number | string) {
        this.url = 'http://localhost:57777/api/tinhtrang/getallbyidthucung/' + idThuCung;
        return this.apiService.get(this.url).subscribe(res => {
            this.listtinhTrangWithIdThuCung = res.data;
        });
    }

    counttinhTrang(): Observable<any> {
        this.url = 'http://localhost:57777/api/tinhtrang/listcounttinhTrang';
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    tinhTrangList() {
        this.url = 'http://localhost:57777/api/tinhtrang/getall';
        this.apiService.get(this.url).subscribe(res => {
            this.tinhTrangListProperty = res.data;
        });
    }
}
