import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColConfig, getDataFromObject, TableConfig } from '../shared';

@Component({
  selector: 'dtc-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() config: ColConfig<any>[];

  @Input() mobileConfig: ColConfig<any>[];

  @Input() data: any[];

  @Input() tableConfig: TableConfig<any>;

  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();

  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output() rowActionClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getDataFromObject(object, path) {
    return getDataFromObject(object, path);
  }

}
