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
import { LinkServerModel } from '../Model/LinkServer.model';

@Injectable()

export class GioiThieuService {

    sessionuser: any;
    idTaiKhoan: number;

    constructor(
        private apiService: ApiService,
        private toastr: ToastrService,
        private http: HttpClient,
        private sessionService: SessionService,
        private coSoThuYService: CoSoThuYService,
    ) { }

    gioiThieuProperty: any[];
    url: string;

    Update(gioiThieu: any) {
        this.url = LinkServerModel.URL + 'api/gioi-thieu/update';
        return this.apiService.put(this.url, gioiThieu);
    }

    viewgioiThieuVoiCSYT(cSYTId: number | string): Observable<any> {
        this.url = LinkServerModel.URL + 'api/gioi-thieu/get-by-id/' + cSYTId;
        return this.apiService.get(this.url);
    }

    gioiThieuVoiCSYT() {
        this.sessionuser = this.sessionService.getToken();
        this.coSoThuYService.viewWithIdTaiKhoan(this.sessionuser.IdTaiKhoan).subscribe(res => {
            this.viewgioiThieuVoiCSYT(res.data.IdCoSoThuY).subscribe(res1 => {
                this.gioiThieuProperty = res1.data.NoiDung;
            });
        });
    }
}
