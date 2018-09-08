import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DistinctTableComponent } from './distinct-table.component';
import { ViewComponent } from './view/view.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { RowComponent } from './row/row.component';
import { CollapseComponent } from './collapse/collapse.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DistinctTableComponent,
    ViewComponent,
    BodyComponent,
    HeaderComponent,
    RowComponent,
    CollapseComponent
  ],
  exports: [
    DistinctTableComponent,
    ViewComponent
  ]
})
export class DistinctTableModule { }
