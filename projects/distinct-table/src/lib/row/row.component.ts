import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColConfig, getDataFromObject, TableConfig } from '../shared';
import { of } from 'rxjs';

/**
 * emit events for cell clicked
 * emit event for phone and email clicked
 */

@Component({
  selector: 'dtc-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() data: any;

  @Input() config: ColConfig<any>[];

  @Input() mobileConfig: ColConfig<any>[];

  @Input() tableConfig: TableConfig<any>;

  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();

  @Output() actionClicked: EventEmitter<any> = new EventEmitter<any>();

  showActions = false;

  isCollapsed = true;

  collpaseParent: any;

  collpaseData: any;

  collapsedComponent: any;

  showImage: boolean = true;

  constructor() { }

  ngOnInit() {
    if (this.tableConfig.showActionsType === 'always') {
      this.showActions = true;
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
      this.collpaseParent = { id: this.getDataFromObject('id'), type: this.getDataFromObject('kind') };
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
    }
    else {
      this.rowClicked.emit(this.data);
    }
  }

  getDataFromObject(path) {
    return getDataFromObject(this.data, path);
  }

}
