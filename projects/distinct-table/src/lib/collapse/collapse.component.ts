import { Component, OnInit, Input, ViewChild, ViewContainerRef, SimpleChanges } from '@angular/core';
import { DistinctTableService } from '../distinct-table.service';

@Component({
  selector: 'dtc-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  @Input() data;

  @Input() parent;

  @Input() component;

  @ViewChild('collapse', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private service: DistinctTableService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.component && !changes.component.firstChange) {
      this.service.addDynamicComponent(this.viewContainerRef, this.component, this.data, this.parent);
    }
  }

}
