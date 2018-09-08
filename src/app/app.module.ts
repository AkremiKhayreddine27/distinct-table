import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbCardModule, NbMenuModule, NbMenuService } from '@nebular/theme';

import { DistinctTableModule } from '../../projects/distinct-table/src/public_api';
import { ShowComponent } from './show/show.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    DeleteComponent
  ],
  entryComponents: [
    ShowComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { useHash: true }),
    NbSidebarModule,
    NbLayoutModule,
    NbCardModule,
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    DistinctTableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
