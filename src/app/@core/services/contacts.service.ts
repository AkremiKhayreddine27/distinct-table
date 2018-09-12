import { Injectable } from '@angular/core';
import { DataService } from './data.abstract';
import { User } from '../models';

import * as faker from 'faker';

@Injectable()
export class ContactsService extends DataService {
  roles: any[] = [
    { id: 1, value: 'propriétaire' },
    { id: 2, value: 'locataire' },
    { id: 3, value: 'prestataire de service' }
  ];

  generate(nbr, args = null) {
    for (let i = 0; i < nbr; i++) {
      const contact: User = {
        id: faker.random.number(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        groups: [faker.random.arrayElement(this.roles).id],
        phone: faker.phone.phoneNumber(),
        location: {
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          address: 'Info Municipale, Chemin de Bretagne',
          longitude: 2.2582740783036575,
          latitude: 48.82377450294101,
          postcode: '92130',
          isValid: true
        }
      };
      this.store(contact);
    }
  }
}
