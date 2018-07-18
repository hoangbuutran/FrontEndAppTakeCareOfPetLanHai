import { Component, OnInit } from '@angular/core';
import { CoSoThuYService } from '../../shared/Service/CoSoThuY.service';

@Component({
  selector: 'app-thu-cung-nguoi-dung',
  templateUrl: './thu-cung-nguoi-dung.component.html',
  styleUrls: ['./thu-cung-nguoi-dung.component.css']
})
export class ThuCungNguoiDungComponent implements OnInit {

  listCoSoThuY: any[];

  constructor(
    private coSoThuYService: CoSoThuYService,
  ) { }

  ngOnInit() {
    this.coSoThuYService.coSoThuYListForNguoiDung().subscribe(res => {
      this.listCoSoThuY = res.data;
    });
  }

}
