import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThemeModule } from './@theme/theme.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './@core/core.module';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const metaReducers: MetaReducer<any>[] = [];

import { AppComponent } from './app.component';

import { NbThemeModule } from '@nebular/theme';
import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbCardModule,
  NbMenuModule,
  NbMenuService,
  NbActionsModule,
  NbUserModule
} from '@nebular/theme';

import { DistinctTableModule } from '../../projects/distinct-table/src/public_api';
import { ShowComponent } from './show/show.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [AppComponent, ShowComponent, DeleteComponent],
  entryComponents: [ShowComponent, DeleteComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { useHash: true }),
    ThemeModule,
    NbSidebarModule,
    NbLayoutModule,
    NbCardModule,
    NbActionsModule,
    NbUserModule,
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    DistinctTableModule,
    FormsModule,
    ReactiveFormsModule,

    CoreModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 35,
    }),
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
