import { Component, Input } from '@angular/core';
import { TableHeader } from '../shared';
import { TableConfig } from '../shared/interfaces';
import * as helpers from '../shared/helpers';

@Component({
  selector: 'dtc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  config: TableHeader[];

  @Input()
  mobileConfig: TableHeader[];

  @Input()
  data: any[];

  @Input()
  tableConfig: TableConfig<any>;

  constructor() {}

  sort(attribut) {
    this.resetSort(attribut);
    attribut.direction = attribut.direction === 'asc' ? 'desc' : 'asc';
    this.data = helpers.LocalSorter.sort(
      this.data,
      attribut.path,
      attribut.direction
    );
  }

  resetSort(attribut) {
    this.config.map(header => {
      if (header.sort) {
        header.sort.attributes.map(attr => {
          if (attr.name !== attribut.name) {
            attr.direction = 'desc';
          }
        });
      }
    });
    this.mobileConfig.map(header => {
      if (header.sort) {
        header.sort.attributes.map(attr => {
          if (attr.name !== attribut.name) {
            attr.direction = 'desc';
          }
        });
      }
    });
  }
}
