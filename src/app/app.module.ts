import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThemeModule } from './@theme/theme.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CoreModule } from './@core/core.module';

import { NgSelectModule } from '@ng-select/ng-select';

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
import { CreateGroupComponent } from './create-group/create-group.component';
import { DeleteGroupComponent } from './delete-group/delete-group.component';

@NgModule({
  declarations: [AppComponent, ShowComponent, DeleteComponent, CreateGroupComponent, DeleteGroupComponent],
  entryComponents: [ShowComponent, DeleteComponent, CreateGroupComponent, DeleteGroupComponent],
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
    NgSelectModule,
    InfiniteScrollModule,
    CoreModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 35
    })
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
