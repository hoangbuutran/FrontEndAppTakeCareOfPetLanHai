import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-co-so-thu-yfor-nguoi-dung',
  templateUrl: './co-so-thu-yfor-nguoi-dung.component.html',
  styleUrls: ['./co-so-thu-yfor-nguoi-dung.component.css']
})
export class CoSoThuYforNguoiDungComponent implements OnInit {

  IdCoSoThuY: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.IdCoSoThuY = params.get('IdCoSoThuY');
    });
  }

}
