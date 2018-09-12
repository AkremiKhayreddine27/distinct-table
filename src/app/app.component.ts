import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { TableConfig } from '../../projects/distinct-table/src/public_api';
import { of } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from './@core/store';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShowComponent } from './show/show.component';
import { DeleteComponent } from './delete/delete.component';
import { delay, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  users$;
  users = [];

  title = 'app';
  groups: any[] = [
    { id: 1, value: 'propriétaire' },
    { id: 2, value: 'locataire' },
    { id: 3, value: 'prestataire de service' }
  ];
  config: TableConfig<any> = {
    displayHeader: true,
    bordred: false,
    showActionsType: 'hover',
    alignDesktop: 'start',
    alignMobile: 'start',
    selectType: 'image',
    imagePath: 'avatar',
    lettersPath: 'firstname',
    header: [
      {
        width: 'col-3',
        label: 'Name',
        sort: {
          attributes: [
            { name: 'First name', path: 'firstname', direction: 'desc' },
            { name: 'Last name', path: 'lastname', direction: 'desc' }
          ]
        }
      },
      {
        width: 'col-3',
        label: 'E-mail',
        sort: {
          attributes: [{ name: 'E-mail', path: 'email', direction: 'desc' }]
        }
      },
      {
        width: 'col-2',
        label: 'Phone',
        sort: {
          attributes: [{ name: 'Phone', path: 'phone', direction: 'desc' }]
        }
      },
      {
        width: 'col-3',
        label: 'Address',
        sort: {
          attributes: [
            { name: 'Address', path: 'location.address', direction: 'desc' },
            {
              name: 'Postal code',
              path: 'location.postcode',
              direction: 'desc'
            },
            { name: 'City', path: 'location.city', direction: 'desc' },
            { name: 'Country', path: 'location.country', direction: 'desc' }
          ]
        }
      },
      {
        width: 'col-1',
        label: ''
      }
    ],
    mobileHeader: [
      {
        width: 'col-12',
        label: 'Contacts',
        sort: {
          attributes: [
            { name: 'First name', path: 'firstname', direction: 'desc' },
            { name: 'Last name', path: 'lastname', direction: 'desc' },
            { name: 'Phone', path: 'phone', direction: 'desc' },
            { name: 'E-mail', path: 'email', direction: 'desc' }
          ]
        }
      }
    ],
    cols: [
      {
        width: 'col-3',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'firstname'
              },
              {
                type: 'text',
                path: 'lastname'
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: 'array',
                path: 'groups',
                getData: id => {
                  return this.groups.find(group => {
                    return group.id === id;
                  }).value;
                }
              }
            ],
            align: true
          }
        ]
      },
      {
        width: 'col-3',
        data: [
          {
            line: [
              {
                type: 'icon',
                icon: 'fa fa-envelope'
              },
              {
                type: 'email',
                path: 'email'
              }
            ],
            align: true
          }
        ]
      },
      {
        width: 'col-2',
        data: [
          {
            line: [
              {
                type: 'icon',
                icon: 'fa fa-phone'
              },
              {
                type: 'phone',
                path: 'phone'
              }
            ],
            align: true
          }
        ]
      },
      {
        width: 'col-4',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'location.address'
              }
            ],
            align: false
          },
          {
            line: [
              {
                type: 'text',
                path: 'location.postcode'
              },
              {
                type: 'text',
                path: 'location.city'
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: 'text',
                path: 'location.state'
              },
              {
                type: 'text',
                path: 'location.country'
              }
            ],
            align: true
          }
        ]
      }
    ],
    mobileCols: [
      {
        width: 'col-12',
        data: [
          {
            line: [
              {
                type: 'text',
                path: 'firstname'
              },
              {
                type: 'text',
                path: 'lastname'
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: 'icon',
                icon: 'fa fa-phone'
              },
              {
                type: 'phone',
                path: 'phone'
              }
            ],
            align: true
          },
          {
            line: [
              {
                type: 'icon',
                icon: 'fa fa-envelope'
              },
              {
                type: 'email',
                path: 'email'
              }
            ],
            align: true
          }
        ]
      }
    ],
    desktopActions: [
      {
        type: 'icon',
        icon: 'fa fa-edit',
        calback: 'edit'
      },
      {
        type: 'dropdown',
        dropdownConfig: {
          toggle: {
            type: 'icon',
            icon: 'fa fa-ellipsis-v'
          },
          items: [
            {
              data: [
                {
                  type: 'icon',
                  icon: 'fa fa-trash'
                },
                {
                  type: 'text',
                  label: 'Delete'
                }
              ],
              calback: 'delete'
            }
          ]
        }
      }
    ],
    mobileActions: [
      {
        type: 'dropdown',
        dropdownConfig: {
          toggle: {
            type: 'icon',
            icon: 'fa fa-ellipsis-v'
          },
          items: [
            {
              data: [
                {
                  type: 'icon',
                  icon: 'fa fa-trash'
                },
                {
                  type: 'text',
                  label: 'Delete'
                }
              ],
              calback: 'delete'
            }
          ]
        }
      }
    ]
  };

  selectedData: any[] = [];
  allSelected: any = { type: 'event', checked: false };

  filtersConf = { filters: [], andOperator: true };

  alive = true;

  constructor(
    private store: Store<fromStore.LocatusState>,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.store
      .select<any>(fromStore.getPaginatedSortedFiltredContacts)
      .pipe(
        delay(50),
        takeWhile(() => this.alive)
      )
      .subscribe(users => {
        this.users = users;
      });
  }

  ngAfterViewInit() {
    this.store.dispatch(
      new fromStore.LoadContacts(this.filtersConf, [], {
        page: 1,
        perPage: 20
      })
    );
  }

  ngOnDestroy() {
    this.alive = false;
  }

  handleRowClicked(row) {
    const modalRef = this.modalService.open(ShowComponent);
    modalRef.componentInstance.contact = row;
  }

  handleSelectRowChanged(event) {
    if (event.checked) {
      this.selectedData.push(event.row);
    } else {
      this.selectedData = this.selectedData.filter(item => {
        return item.id !== event.row.id;
      });
    }
    this.allSelected = {
      type: 'change',
      checked: this.selectedData.length === this.users.length
    };
  }

  handleSelectAllChanged($event) {
    this.allSelected = { type: 'event', checked: this.allSelected.checked };
    if (this.allSelected.checked) {
      this.selectedData = this.users;
    } else {
      this.selectedData = [];
    }
  }

  handleRowActionClicked(event: { action: string; row: any }) {
    this[event.action](event.row);
  }

  handleDeleteSelectedItems(items) {
    console.log(items);
  }

  edit(user) {
    const modalRef = this.modalService.open(ShowComponent);
    modalRef.componentInstance.contact = user;
    modalRef.componentInstance.edit = true;
  }

  delete(user) {
    console.log(user);
  }
}
