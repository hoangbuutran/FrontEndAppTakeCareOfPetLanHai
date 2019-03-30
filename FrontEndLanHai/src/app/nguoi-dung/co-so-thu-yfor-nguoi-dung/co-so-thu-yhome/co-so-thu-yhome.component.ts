import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GioiThieuService } from '../../../shared/Service/GioiThieu.service';

@Component({
  selector: 'app-co-so-thu-yhome',
  templateUrl: './co-so-thu-yhome.component.html',
  styleUrls: ['./co-so-thu-yhome.component.css']
})
export class CoSoThuYhomeComponent implements OnInit {
  id: any;
  gioiThieuPropertyOfThuY: any[];
  constructor(
    private gioiThieuService: GioiThieuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdCoSoThuY');
    });
    this.gioiThieuService.viewgioiThieuVoiCSYT(this.id).subscribe(res => {
      this.gioiThieuPropertyOfThuY = res.data.NoiDung;
    });
  }

}
