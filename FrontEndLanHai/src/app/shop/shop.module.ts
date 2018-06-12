import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HomeShopComponent } from './home-shop/home-shop.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  declarations: [ShopComponent, HomeShopComponent]
})
export class ShopModule { }
