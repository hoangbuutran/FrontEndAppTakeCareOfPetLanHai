import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SanPhamService } from '../../../shared/Service/SanPham.service';
import { LoaiSanPhamService } from '../../../shared/Service/LoaiSanPham.service';
import { ShopService } from '../../../shared/Service/Shop.service';
import { SanPhamModel } from '../../../shared/Model/SanPham.model';
import { ShoppingCartService } from '../../../shared/Service/ShoppingCart.service';
import { ToastrService } from 'ngx-toastr';
import { LinkServerModel } from '../../../shared/Model/LinkServer.model';

@Component({
  selector: 'app-view-detail-product',
  templateUrl: './view-detail-product.component.html',
  styleUrls: ['./view-detail-product.component.css']
})
export class ViewDetailProductComponent implements OnInit {
  urlServer = LinkServerModel.URL;
  id = '';
  GiaDetail: any;
  DacDiemDetail: any;
  HinhAnhSanPhamsDetail: any[];
  HinhAnhSanPhams: any[];
  IdLoaiSanPhamDetail: any;
  TenLoaiSanPham: any;
  IdSanPhamDetail: any;
  IdShopDetail: any;
  TenShop: any;
  NgayNhapDetail: any;
  TenSanPhamDetail: any;
  listLinkHinhAnh = new Array<string>();
  sanPhamDetail: any;

  constructor(
    private route: ActivatedRoute,
    private sanPhamService: SanPhamService,
    private loaiSanPhamService: LoaiSanPhamService,
    private shopService: ShopService,
    private shoppingCartService: ShoppingCartService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdSanPham');
    });
    this.sanPhamService.view(this.id).subscribe(res => {
      this.sanPhamDetail = res.data;
      this.GiaDetail = res.data.Gia;
      this.DacDiemDetail = res.data.DacDiem;
      this.HinhAnhSanPhamsDetail = res.data.HinhAnhSanPhams;
      this.IdLoaiSanPhamDetail = res.data.IdLoaiSanPham;
      this.IdSanPhamDetail = res.data.IdSanPham;
      this.IdShopDetail = res.data.IdShop;
      this.TenSanPhamDetail = res.data.TenSanPham;
      this.getLink();
      this.loaiSanPhamService.view(this.IdLoaiSanPhamDetail).subscribe(res2 => {
        this.TenLoaiSanPham = res2.data.TenLoaiSanPham;
      });
      this.shopService.view(this.IdShopDetail).subscribe(res1 => {
        this.TenShop = res1.data.TenShop;
      });
    });

  }


  getLink() {
    this.listLinkHinhAnh = [];
    this.HinhAnhSanPhamsDetail.forEach(element => {
      this.listLinkHinhAnh.push(LinkServerModel.URL + 'Images/' + element.LinkHinhAnh);
    });
  }

  public addProductToCart(product: SanPhamModel): void {
    this.toastr.success('sản phẩm đã được thêm vào giỏ', 'Thông báo');
    this.shoppingCartService.addItem(this.sanPhamDetail, 1);
  }


}
