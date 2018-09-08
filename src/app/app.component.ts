import { Component } from '@angular/core';

import { NbSidebarService } from '@nebular/theme';

import { TableConfig } from '../../projects/distinct-table/src/public_api';
import { of } from 'rxjs';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ShowComponent } from './show/show.component';
import { DeleteComponent } from './delete/delete.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  groups = [
    {
      id: 1,
      name: 'Locataire'
    },
    {
      id: 2,
      name: 'Prestataire de service'
    },
    {
      id: 3,
      name: 'Propriétaire'
    }
  ];

  users = [
    {
      id: 1,
      firstname: 'Akremi',
      lastname: 'Khayreddine',
      email: 'khayreddine.akremi@gmail.com',
      phone: '+216 25 168 368',
      avatar: '',
      status: 'active',
      groups: [1, 2],
      location: {
        address: 'Info Municipale, Chemin de Bretagne',
        postCode: '92130',
        city: 'Issy-les-Moulineaux',
        country: 'France',
        state: 'Ile-de-France'
      }
    },
    {
      id: 2,
      firstname: 'Doe',
      lastname: 'Jhon',
      email: 'khayreddine.akremi@gmail.com',
      phone: '+216 25 168 368',
      avatar: 'assets/alan.png',
      status: 'active',
      groups: [2, 3],
      location: {
        address: 'Info Municipale, Chemin de Bretagne',
        postCode: '92130',
        city: 'Issy-les-Moulineaux',
        country: 'France',
        state: 'Ile-de-France'
      }
    },
    {
      id: 3,
      firstname: 'Akremi',
      lastname: 'Khayreddine',
      email: 'khayreddine.akremi@gmail.com',
      phone: '+216 25 168 368',
      avatar: 'assets/alan.png',
      status: 'inactive',
      groups: [1, 2],
      location: {
        address: 'Info Municipale, Chemin de Bretagne',
        postCode: '92130',
        city: 'Issy-les-Moulineaux',
        country: 'France',
        state: 'Ile-de-France'
      }
    },
    {
      id: 4,
      firstname: 'Akremi',
      lastname: 'Khayreddine',
      email: 'khayreddine.akremi@gmail.com',
      phone: '+216 25 168 368',
      avatar: 'assets/alan.png',
      status: 'active',
      groups: [1, 3],
      location: {
        address: 'Info Municipale, Chemin de Bretagne',
        postCode: '92130',
        city: 'Issy-les-Moulineaux',
        country: 'France',
        state: 'Ile-de-France'
      }
    },
    {
      id: 5,
      firstname: 'Akremi',
      lastname: 'Khayreddine',
      email: 'khayreddine.akremi@gmail.com',
      phone: '+216 25 168 368',
      avatar: 'assets/alan.png',
      status: 'active',
      groups: [1, 2],
      location: {
        address: 'Info Municipale, Chemin de Bretagne',
        postCode: '92130',
        city: 'Issy-les-Moulineaux',
        country: 'France',
        state: 'Ile-de-France'
      }
    },
    {
      id: 6,
      firstname: 'Akremi',
      lastname: 'Khayreddine',
      email: 'khayreddine.akremi@gmail.com',
      phone: '+216 25 168 368',
      avatar: 'assets/alan.png',
      status: 'active',
      groups: [2, 3],
      location: {
        address: 'Info Municipale, Chemin de Bretagne',
        postCode: '92130',
        city: 'Issy-les-Moulineaux',
        country: 'France',
        state: 'Ile-de-France'
      }
    },
    {
      id: 7,
      firstname: 'Akremi',
      lastname: 'Khayreddine',
      email: 'khayreddine.akremi@gmail.com',
      phone: '+216 25 168 368',
      avatar: 'assets/alan.png',
      status: 'active',
      groups: [1, 2],
      location: {
        address: 'Info Municipale, Chemin de Bretagne',
        postCode: '92130',
        city: 'Issy-les-Moulineaux',
        country: 'France',
        state: 'Ile-de-France'
      }
    },
    {
      id: 8,
      firstname: 'Akremi',
      lastname: 'Khayreddine',
      email: 'khayreddine.akremi@gmail.com',
      phone: '+216 25 168 368',
      avatar: 'assets/alan.png',
      status: 'active',
      groups: [1, 2],
      location: {
        address: 'Info Municipale, Chemin de Bretagne',
        postCode: '92130',
        city: 'Issy-les-Moulineaux',
        country: 'France',
        state: 'Ile-de-France'
      }
    },
    {
      id: 9,
      firstname: 'Akremi',
      lastname: 'Khayreddine',
      email: 'khayreddine.akremi@gmail.com',
      phone: '+216 25 168 368',
      avatar: 'assets/alan.png',
      status: 'active',
      groups: [1, 2],
      location: {
        address: 'Info Municipale, Chemin de Bretagne',
        postCode: '92130',
        city: 'Issy-les-Moulineaux',
        country: 'France',
        state: 'Ile-de-France'
      }
    }
  ]


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
            { name: 'Last name', path: 'lastname', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-3',
        label: 'E-mail',
        sort: {
          attributes: [
            { name: 'E-mail', path: 'email', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-2',
        label: 'Phone',
        sort: {
          attributes: [
            { name: 'Phone', path: 'phone', direction: 'desc' },
          ]
        }
      },
      {
        width: 'col-3',
        label: 'Address',
        sort: {
          attributes: [
            { name: 'Address', path: 'location.address', direction: 'desc' },
            { name: 'Postal code', path: 'location.postCode', direction: 'desc' },
            { name: 'City', path: 'location.city', direction: 'desc' },
            { name: 'Country', path: 'location.country', direction: 'desc' },
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
      },
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
              },
            ],
            align: true
          },
          {
            line: [
              {
                type: 'array',
                path: 'groups',
                getData: (id) => {
                  return this.groups.find(group => {
                    return group.id === id;
                  }).name;
                }
              },
            ],
            align: true
          }
        ],
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
              },
            ],
            align: true
          }
        ],
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
              },
            ],
            align: true
          },
          /*
          {
            line: [
              {
                type: 'collapse',
                label: 'details',
                component: AppComponent,
                getData: (id) => {
                  return of(this.users.find(user => {
                    return user.id === id;
                  }));
                }
              }
            ],
            align: true
          },
          */
        ],
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
                path: 'location.postCode'
              },
              {
                type: 'text',
                path: 'location.city'
              },
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
          },
          {
            line: [
              {
                type: 'collapse',
                label: 'details',
                component: DeleteComponent,
              }
            ],
            align: true
          },
        ],
      },
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
              },
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
              },
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
              },
            ],
            align: true
          },
        ],
      },
    ],
    desktopActions: [
      {
        type: 'icon',
        icon: 'fa fa-edit',
        calback: 'edit',
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
  }

  constructor(private modalService: NgbModal, private sidebarService: NbSidebarService) { }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  handleRowClicked(row) {
    const modalRef = this.modalService.open(ShowComponent);
    modalRef.componentInstance.contact = row;
  }

  handleSelectRowChanged(row) {
    console.log(row);
  }

  handleRowActionClicked(event: { action: string, row: any }) {
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
