import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../../shared/Service/session.service';
import { TaiKhoanService } from '../../shared/Service/TaiKhoan.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  ChangePassForm: FormGroup;
  PassNewLan2: any;
  sessionuser: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private taiKhoanService: TaiKhoanService,
  ) { }

  ngOnInit() {
    this.ChangePassForm = this.fb.group({
      UserName: ['', Validators.required],
      PassOld: ['', Validators.required],
      PassNew: ['', Validators.required],
    });
    this.sessionuser = this.sessionService.getToken();
  }

  ChangePassSubmitForm() {
    if (this.ChangePassForm.value.UserName === this.sessionuser.UserName) {
      if (this.ChangePassForm.value.PassOld === this.sessionuser.Pass) {
        this.taiKhoanService.ChangePass(this.ChangePassForm.value).subscribe(res => {
          sessionStorage.removeItem('session');
          this.sessionService.saveSession(res.data);
          this.toastr.success(res.message, 'Thông báo');
        });
        this.router.navigate(['/admin/home']);
      } else {
        alert('Mật khẩu củ không đúng');
      }
    } else {
      alert('Tên đăng nhập không đúng');
    }
  }
}
