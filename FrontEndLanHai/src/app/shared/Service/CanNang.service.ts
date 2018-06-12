import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { CanNangModel } from '../Model/CanNang.model';
import { SessionService } from './session.service';
import { CoSoYTeService } from './CoSoYTe.service';

@Injectable()

export class CanNangService {
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
    ) { }

    canNangListProperty: CanNangModel[];
    listcanNangWithIdThuCung: CanNangModel[];
    url: string;

    create(canNang: any): Observable<any> {
        this.url = 'http://localhost:1650/api/cannang/create';
        return this.apiService.post(this.url, canNang);
    }

    KhoaMo(canNangId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/cannang/khoamo/' + canNangId;
        return this.apiService.get(this.url);
    }

    delete(canNangId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/cannang/delete/' + canNangId;
        return this.apiService.get(this.url);
    }
    Update(canNang: CanNangModel) {
        this.url = 'http://localhost:1650/api/cannang/update';
        return this.apiService.put(this.url, canNang);
    }

    view(canNangId: number | string): Observable<any> {
        this.url = 'http://localhost:1650/api/cannang/getbyid/' + canNangId;
        return this.apiService.get(this.url);
    }

    viewcanNangVoiIdThuCung(idThuCung: number | string) {
        this.url = 'http://localhost:1650/api/cannang/getallcannangwithidthucung/' + idThuCung;
        return this.apiService.get(this.url).subscribe(res => {
            this.listcanNangWithIdThuCung = res.data;
        });
    }

    countcanNang(): Observable<any> {
        this.url = 'http://localhost:1650/api/cannang/listcountcanNang';
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    canNangList() {
        this.url = 'http://localhost:1650/api/cannang/getall';
        this.apiService.get(this.url).subscribe(res => {
            this.canNangListProperty = res.data;
        });
    }
}
