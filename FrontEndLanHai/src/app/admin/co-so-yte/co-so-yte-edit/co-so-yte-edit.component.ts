import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CoSoYTeService } from '../../../shared/Service/CoSoYTe.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-co-so-yte-edit',
  templateUrl: './co-so-yte-edit.component.html',
  styleUrls: ['./co-so-yte-edit.component.css']
})
export class CoSoYteEditComponent implements OnInit {

  id = '';
  CoSoYTeEditForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'Mở Cơ Sở Y Tế' },
    { id: false, name: 'Khóa Cơ Sở Y Tế' },
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private coSoYTeService: CoSoYTeService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdCoSoYTe');
    });
    this.CoSoYTeEditForm = this.fb.group({
      IdCoSoYTe: [''],
      TenCoSoYTe: ['', Validators.required],
      DiaDiem: ['', Validators.required],
      IdTaiKhoan: [''],
      SDT: ['', Validators.required],
      Email: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.coSoYTeService.view(this.id).subscribe(res => {
      this.CoSoYTeEditForm.get('IdCoSoYTe').patchValue(res.data.IdCoSoYTe);
      this.CoSoYTeEditForm.get('IdTaiKhoan').patchValue(res.data.IdTaiKhoan);
      this.CoSoYTeEditForm.get('TenCoSoYTe').patchValue(res.data.TenCoSoYTe);
      this.CoSoYTeEditForm.get('DiaDiem').patchValue(res.data.DiaDiem);
      this.CoSoYTeEditForm.get('SDT').patchValue(res.data.SDT);
      this.CoSoYTeEditForm.get('Email').patchValue(res.data.Email);
      this.CoSoYTeEditForm.get('TrangThai').patchValue(res.data.TrangThai);
    });
  }

  CoSoYTeEditSubmitForm() {
    this.coSoYTeService.Update(this.CoSoYTeEditForm.value)
      .subscribe(res => {
        this.coSoYTeService.coSoYTeList();
        this.toastr.success(res.message, 'Thông báo');
      });
    this.router.navigate(['/admin/cosoyte/list']);
  }
}
