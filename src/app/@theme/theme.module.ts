import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NbActionsModule, NbUserModule } from '@nebular/theme';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgSelectModule,
    NbActionsModule,
    NbUserModule
  ],
  declarations: [LayoutComponent, HeaderComponent],
  exports: [HeaderComponent]
})
export class ThemeModule {}
