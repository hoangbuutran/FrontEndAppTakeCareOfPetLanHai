import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../../shared/Model/FileUpload.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UploadFileService } from '../../../shared/Service/UploadFile.service';

@Component({
  selector: 'app-tao-moi-bai-dang',
  templateUrl: './tao-moi-bai-dang.component.html',
  styleUrls: ['./tao-moi-bai-dang.component.css']
})
export class TaoMoiBaiDangComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  downloadURLLocal: any;
  BaiVietAddForm: FormGroup;

  trangThaiList = [
    { id: true, name: 'public' },
    { id: false, name: 'private' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private uploadService: UploadFileService,
  ) { }

  ngOnInit() {
    this.BaiVietAddForm = this.fb.group({
      TieuDe: ['123', Validators.required],
      NoiDung: ['123', Validators.required],
      HinhAnh: ['', Validators.required],
      IdChuyenMuc: ['1', Validators.required],
      IdNguoiDung: ['4', Validators.required],
      TrangThai: ['true', Validators.required],
    });
  }

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.BaiVietAddForm.value,this.currentFileUpload, this.progress);
  }

}
