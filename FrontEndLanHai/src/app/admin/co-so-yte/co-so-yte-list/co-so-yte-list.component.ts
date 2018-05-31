import { Component, OnInit } from '@angular/core';
import { CoSoYTeService } from '../../../shared/Service/CoSoYTe.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-co-so-yte-list',
  templateUrl: './co-so-yte-list.component.html',
  styleUrls: ['./co-so-yte-list.component.css']
})
export class CoSoYteListComponent implements OnInit {

  arrayDelete = [];
  UserNameDetail: string;
  PassDetail: string;
  imageUrl;
  constructor(
    private coSoYTeService: CoSoYTeService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.coSoYTeService.coSoYTeList();
  }

  checkboxDelete(id: number | string) {
    this.arrayDelete.unshift(id);
  }

  xoaNhieu() {
    this.arrayDelete.forEach(element => {
      this.coSoYTeService.delete(element).subscribe(x => {
        this.coSoYTeService.coSoYTeList();
      });
    });
    this.toastr.warning('Xóa nhiều cơ sở y tế thành công', 'Thông báo');
  }

  xemTaiKhoanCoSoYTe(id: number) {
    this.coSoYTeService.xemTaiKhoanCoSoYTe(id).subscribe(x => {
      this.UserNameDetail = x.data.UserName;
      this.PassDetail = x.data.Pass;

    });
  }

  khoaMo(id: number) {
    if (confirm('Bạn có chắc chắn muốn khóa cơ sở y tế ?') === true) {
      this.coSoYTeService.KhoaMo(id)
        .subscribe(x => {
          this.coSoYTeService.coSoYTeList();
          this.toastr.warning(x.message, 'Thông báo');
        });
    }
  }

  xoaCoSoYTe(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa cơ sở y tế ?') === true) {
      this.coSoYTeService.delete(id)
        .subscribe(x => {
          this.coSoYTeService.coSoYTeList();
          this.toastr.warning('Xóa cơ sở y tế thành công', 'Thông báo');
        });
    }
  }
}
