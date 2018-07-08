import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaiKhoanService } from '../shared/Service/TaiKhoan.service';
import { Router } from '@angular/router';
import { SessionService } from '../shared/Service/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  LoginForm: FormGroup;
  errorMessenger: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private taiKhoanService: TaiKhoanService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      UserName: ['', Validators.required],
      Pass: ['', Validators.required],
      RememberMe: [''],
    });
  }

  LoginSubmitForm() {
    this.taiKhoanService.Login(this.LoginForm.value)
      .subscribe(res => {
        if (res.isSuccess) {

          if (res.data.IdQuyen === 1) {// admin
            this.sessionService.saveSession(res.data);
            this.router.navigate(['/admin']);

          } else if (res.data.IdQuyen === 2) { // CSYT
            this.sessionService.saveSession(res.data);
            this.router.navigate(['/cosoyteql']);

          } else if (res.data.IdQuyen === 3) { // Nguoi dung
            this.sessionService.saveSession(res.data);
            this.router.navigate(['/nguoidung']);

          } else if (res.data.IdQuyen === 4) { // Nguoi dung
            this.sessionService.saveSession(res.data);
            this.router.navigate(['/shop']);

          }
        } else { // sai tai khoan
          this.errorMessenger = res.message;
        }
      });
  }

}
