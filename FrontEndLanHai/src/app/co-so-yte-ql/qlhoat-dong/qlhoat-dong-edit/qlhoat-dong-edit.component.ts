import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HoatDongService } from '../../../shared/Service/HoatDong.service';
import { ToastrService } from 'ngx-toastr';
import { CoSoThuYService } from '../../../shared/Service/CoSoThuY.service';
import { SessionService } from '../../../shared/Service/session.service';

@Component({
  selector: 'app-qlhoat-dong-edit',
  templateUrl: './qlhoat-dong-edit.component.html',
  styleUrls: ['./qlhoat-dong-edit.component.css']
})
export class QlhoatDongEditComponent implements OnInit {

  id = '';
  hoatDongEditForm: FormGroup;
  sessionuser: any;
  tinhTrangList = [
    { id: true, name: 'Mở hoạt động' },
    { id: false, name: 'Khóa hoạt động' },
  ];
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private hoatDongService: HoatDongService,
    private router: Router,
    private toastr: ToastrService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdHoatDong');
    });
    this.hoatDongEditForm = this.fb.group({
      IdHoatDong: ['', Validators.required],
      TenHoatDong: ['', Validators.required],
      MoTa: ['', Validators.required],
      NoiDung: ['', Validators.required],
      IdCoSoThuY: ['', Validators.required],
      TinhTrang: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.hoatDongService.view(this.id).subscribe(res => {
      this.hoatDongEditForm.get('IdHoatDong').patchValue(res.data.IdHoatDong);
      this.hoatDongEditForm.get('IdCoSoThuY').patchValue(res.data.IdCoSoThuY);
      this.hoatDongEditForm.get('TenHoatDong').patchValue(res.data.TenHoatDong);
      this.hoatDongEditForm.get('MoTa').patchValue(res.data.MoTa);
      this.hoatDongEditForm.get('NoiDung').patchValue(res.data.NoiDung);
      this.hoatDongEditForm.get('TinhTrang').patchValue(res.data.TinhTrang);
    });
  }

  hoatDongEditSubmitForm(){
    this.hoatDongService.Update(this.hoatDongEditForm.value)
    .subscribe(res => {
      this.hoatDongService.hoatDongListVoiCSYT();
      this.toastr.success(res.message, 'Thông báo');
    });
    this.router.navigate(['/cosoyteql/qlhoatdong/list']);
  }

}
