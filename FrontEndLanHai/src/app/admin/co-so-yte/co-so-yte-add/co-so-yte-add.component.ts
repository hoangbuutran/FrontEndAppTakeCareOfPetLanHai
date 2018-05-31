import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoSoYTeService } from '../../../shared/Service/CoSoYTe.service';

@Component({
  selector: 'app-co-so-yte-add',
  templateUrl: './co-so-yte-add.component.html',
  styleUrls: ['./co-so-yte-add.component.css']
})
export class CoSoYteAddComponent implements OnInit {

  CoSoYTeAddForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở cơ sở y tế' },
    { id: false, name: 'Khóa cơ sở y tế' },
  ];

  constructor(
    private fb: FormBuilder,
    private coSoYTeService: CoSoYTeService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.CoSoYTeAddForm = this.fb.group({
      TenCoSoYTe: ['', Validators.required],
      DiaDiem: ['', Validators.required],
      SDT: ['', Validators.required],
      Email: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
  }

  CoSoYTeAddSubmitForm() {
    this.coSoYTeService.create(this.CoSoYTeAddForm.value)
      .subscribe(data => {
        this.coSoYTeService.coSoYTeList();
        this.toastr.success(data.message, 'Thông báo');
      });
    this.router.navigate(['/admin/cosoyte/list']);
  }

}
