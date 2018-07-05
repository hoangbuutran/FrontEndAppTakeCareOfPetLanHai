import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../../shared/Service/UploadFile.service';
import { FileUpload } from '../../../shared/Model/FileUpload.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-thu-cung-nguoi-dung-home',
  templateUrl: './thu-cung-nguoi-dung-home.component.html',
  styleUrls: ['./thu-cung-nguoi-dung-home.component.css']
})
export class ThuCungNguoiDungHomeComponent implements OnInit {

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
    // this.uploadService.pushFileToStorage(this.BaiVietAddForm.value,this.currentFileUpload, this.progress);
  }

}
