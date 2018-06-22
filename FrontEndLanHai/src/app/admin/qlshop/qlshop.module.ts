import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QlshopRoutingModule } from './qlshop-routing.module';
import { QlshopComponent } from './qlshop.component';
import { QlshopListComponent } from './qlshop-list/qlshop-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QlshopAddComponent } from './qlshop-add/qlshop-add.component';

@NgModule({
  imports: [
    CommonModule,
    QlshopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [QlshopComponent, QlshopListComponent, QlshopAddComponent]
})
export class QlshopModule { }
