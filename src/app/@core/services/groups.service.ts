import { Injectable } from '@angular/core';
import { DataService } from './data.abstract';
import { Group } from '../models';

import * as faker from 'faker';

@Injectable()
export class GroupsService extends DataService {
  groups: Group[] = [
    { id: 1, name: 'propriétaire' },
    { id: 2, name: 'locataire' },
    { id: 3, name: 'prestataire de service' }
  ];

  generate(nbr, args = null) {
    this.storeMany(this.groups);
  }
}
