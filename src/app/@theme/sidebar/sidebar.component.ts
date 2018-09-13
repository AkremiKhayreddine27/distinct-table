import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Store } from '@ngrx/store';
import * as fromStore from '../../@core/store';
import { Group } from '../../@core/models/group';
import { delay, takeWhile } from 'rxjs/operators';
import { CreateGroupComponent } from '../../create-group/create-group.component';
import { DeleteGroupComponent } from '../../delete-group/delete-group.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  groups: Group[] = [];
  filtersConf = { filters: [], andOperator: true };

  alive = true;

  constructor(
    private store: Store<fromStore.LocatusState>,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.store
      .select<any>(fromStore.getAllGroups)
      .pipe(
        delay(50),
        takeWhile(() => this.alive)
      )
      .subscribe(groups => {
        this.groups = groups;
      });
  }

  ngAfterViewInit() {
    this.store.dispatch(
      new fromStore.LoadGroups(this.filtersConf, [], {
        page: 1,
        perPage: 20
      })
    );
  }

  createGroup() {
    const modalRef = this.modalService.open(CreateGroupComponent);
    modalRef.componentInstance.edit = true;
  }

  editGroup(group: Group) {
    const modalRef = this.modalService.open(CreateGroupComponent);
    modalRef.componentInstance.group = group;
    modalRef.componentInstance.edit = true;
  }

  deleteGroup(group: Group) {
    const modalRef = this.modalService.open(DeleteGroupComponent);
    modalRef.componentInstance.group = group;
  }

  filter(group) {
    if (group) {
      this.filtersConf = {
        filters: [
          {
            field: 'groups',
            search: group.id.toString(),
            filter: function(cell: any[], search: any) {
              let exist = false;
              cell.map(item => {
                if (item.toString() === search) {
                  exist = true;
                }
              });
              return exist;
            }
          }
        ],
        andOperator: false
      };
      this.store.dispatch(
        new fromStore.LoadContacts(this.filtersConf, [], {
          page: 1,
          perPage: 10
        })
      );
    } else {
      this.store.dispatch(
        new fromStore.LoadContacts({ filters: [], andOperator: true }, [], {
          page: 1,
          perPage: 10
        })
      );
    }
  }
}
