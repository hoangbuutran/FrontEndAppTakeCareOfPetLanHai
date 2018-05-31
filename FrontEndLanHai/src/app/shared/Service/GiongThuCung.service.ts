import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { GiongThuCungModel } from '../Model/GiongThuCung.model';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class GiongThuCungService {
    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient
    ) { }
    giongThuCungListProperty: GiongThuCungModel[];

    url: string;

    create(giongThuCung: any): Observable<any> {
        this.url = 'http://localhost:57777/api/giongthucung/create';
        return this.apiService.post(this.url, giongThuCung);
    }

    upFile(idgiong: string, fileToUpload: any): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('Image', fileToUpload, fileToUpload.name);
        formData.append('Id', idgiong);
        this.url = 'http://localhost:57777/api/giongthucung/uploadimage';
        return this.http.post(this.url, formData);
    }

    KhoaMo(giongThuCungId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/giongthucung/khoamo/' + giongThuCungId;
        return this.apiService.get(this.url);
    }

    delete(giongThuCungId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/giongthucung/delete/' + giongThuCungId;
        return this.apiService.get(this.url);
    }
    Update(giongThuCung: GiongThuCungModel) {
        this.url = 'http://localhost:57777/api/giongthucung/update';
        return this.apiService.put(this.url, giongThuCung);
    }

    view(giongThuCungId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/giongthucung/getbyid/' + giongThuCungId;
        return this.apiService.get(this.url);
    }
    XemThongTinGiongThuCung(giongThuCungId: number | string): Observable<any> {
        this.url = 'http://localhost:57777/api/giongthucung/getbyid/' + giongThuCungId;
        return this.apiService.get(this.url);
    }
    countgiongthucung(): Observable<any> {
        this.url = 'http://localhost:57777/api/giongthucung/listcountgiongthucung';
        return this.apiService.get(this.url);
    }
    search(searchString: string): Observable<any[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    giongThuCungList() {
        this.url = 'http://localhost:57777/api/giongthucung/getall';
        this.apiService.get(this.url).subscribe(res => {
            this.giongThuCungListProperty = res.data;
        });
    }
}
