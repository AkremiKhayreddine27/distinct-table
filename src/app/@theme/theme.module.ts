import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NbActionsModule, NbUserModule } from '@nebular/theme';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgSelectModule,
    NbActionsModule,
    NbUserModule
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
  exports: [HeaderComponent, SidebarComponent]
})
export class ThemeModule {}
