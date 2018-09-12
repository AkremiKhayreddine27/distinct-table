import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ColConfig, getDataFromObject, TableConfig } from '../shared';
import { of } from 'rxjs';
import * as faker from 'faker';

@Component({
  selector: 'dtc-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit, OnChanges {
  @Input()
  data: any;

  @Input()
  config: ColConfig<any>[];

  @Input()
  mobileConfig: ColConfig<any>[];

  @Input()
  tableConfig: TableConfig<any>;

  @Input()
  selectAll: any = { type: 'event', checked: false };

  @Output()
  rowClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  rowSelected: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  actionClicked: EventEmitter<any> = new EventEmitter<any>();

  showActions = false;

  isCollapsed = true;

  collpaseParent: any;

  collpaseData: any;

  collapsedComponent: any;

  showImage: Boolean = true;

  selected: Boolean = false;

  randomColor = faker.commerce.color();

  constructor() {}

  ngOnInit() {
    if (this.tableConfig.showActionsType === 'always') {
      this.showActions = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectAll && this.selectAll.type === 'event') {
      this.selected = this.selectAll.checked;
    }
  }

  toggleShowActions(show) {
    if (this.tableConfig.showActionsType === 'hover') {
      this.showActions = show;
    }
    this.showImage = !show;
  }

  selectRow(checked) {
    this.rowSelected.emit({ row: this.data, checked: checked });
  }

  handleCollapse(item) {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      this.collapsedComponent = item.component;
      if (item.getData) {
        this.collpaseData = item.getData(this.getDataFromObject('id'));
      }
      if (item.collpaseData) {
        this.collpaseData = of(this.getDataFromObject(item.collpaseData));
      }
      this.collpaseParent = {
        id: this.getDataFromObject('id'),
        type: this.getDataFromObject('kind')
      };
    }
  }

  handleRowClicked(event) {
    if (this.tableConfig.collapsedRow) {
      event.preventDefault();
      this.isCollapsed = !this.isCollapsed;
      if (!this.isCollapsed) {
        this.collapsedComponent = this.tableConfig.collapseComponent;
        this.collpaseData = this.tableConfig.collapseData;
        this.collpaseParent = this.data;
      }
    } else {
      this.rowClicked.emit(this.data);
    }
  }

  getDataFromObject(path) {
    return getDataFromObject(this.data, path);
  }

}
