import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

import { Store } from '@ngrx/store';
import * as fromStore from '../../@core/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  apps = [
    {
      name: 'Calendar',
      logo: 'assets/calendar_48dp.png',
      link: 'https://locatus-calendar.firebaseapp.com'
    },
    {
      name: 'Contacts',
      logo: 'assets/contacts_64dp.png',
      link: 'https://locatus-contacts.firebaseapp.com'
    },
    {
      name: 'Documents',
      logo: 'assets/documents.png',
      link: 'https://locatus-calendar.firebaseapp.com'
    },
    {
      name: 'Map',
      logo: 'assets/maps-icon.png',
      link: 'https://locatus-calendar.firebaseapp.com'
    }
  ];
  types = [
    { id: 1, value: 'propriétaire' },
    { id: 2, value: 'locataire' },
    { id: 3, value: 'prestataire de service' }
  ];

  filtersConf;

  showMobileSearch: Boolean = false;

  constructor(
    private store: Store<fromStore.LocatusState>,
    private sidebarService: NbSidebarService
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.GenerateContactsData());
    this.store.dispatch(new fromStore.GenerateGroupsData());
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  filter($event) {
    if ($event) {
      this.filtersConf = {
        filters: [
          {
            field: 'groups',
            search: $event.id.toString(),
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
          perPage: 20
        })
      );
    } else {
      this.store.dispatch(
        new fromStore.LoadContacts({ filters: [], andOperator: true }, [], {
          page: 1,
          perPage: 20
        })
      );
    }
  }
}
