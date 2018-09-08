import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TableHeader } from '../shared';
import { TableConfig } from '../shared/interfaces';
import * as helpers from '../shared/helpers';

@Component({
  selector: 'dtc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() config: TableHeader[];

  @Input() mobileConfig: TableHeader[];

  @Input() data: any[];

  @Input() selectedRows: any[];

  @Input() tableConfig: TableConfig<any>;

  @Output() selectAllChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() deleteSelectedItems: EventEmitter<any> = new EventEmitter<any>();

  all = false;

  constructor() { }

  ngOnInit() {
    this.all = this.data.length === this.selectedRows.length;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedRows) {
      this.all = this.data.length === this.selectedRows.length;
    }
  }

  checkChanged(event) {
    this.data.map(item => {
      item.selected = event.target.checked;
    });
    if (!event.target.checked) {
      this.selectedRows = [];
    }
    this.selectAllChange.emit(event.target.checked);
  }

  sort(attribut) {
    this.resetSort(attribut);
    attribut.direction = attribut.direction === 'asc' ? 'desc' : 'asc';
    this.data = helpers.LocalSorter.sort(this.data, attribut.path, attribut.direction);
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
