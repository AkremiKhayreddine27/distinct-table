import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { TableConfig } from '../shared';

@Component({
  selector: 'dtc-table',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Input()
  config: TableConfig<any>;

  @Input()
  data: any[];

  @Input()
  selectAll: any = { type: 'event', checked: false };

  @Output()
  selectRowChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  rowClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  rowActionClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  handleselectRow(event) {
    this.selectRowChanged.emit(event);
  }
}
