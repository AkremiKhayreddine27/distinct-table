import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as contactsActions from '../actions/contacts.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ContactsService } from '../../services/contacts.service';

import { of } from 'rxjs';

@Injectable()
export class ContactsEffects {
  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) {}

  @Effect()
  generateProperties$ = this.actions$
    .ofType(contactsActions.GENERATE_CONTACTS_DATA)
    .pipe(
      switchMap(() => {
        return of(this.contactsService.generate(20)).pipe(
          map(properties => new contactsActions.GenerateContactsDataSuccess()),
          catchError(error =>
            of(new contactsActions.GenerateContactsDataFail())
          )
        );
      })
    );

  @Effect()
  loadContacts$ = this.actions$.ofType(contactsActions.LOAD_CONTACTS).pipe(
    switchMap(() => {
      return of(this.contactsService.all()).pipe(
        map(contacts => new contactsActions.LoadContactsSuccess(contacts)),
        catchError(error => of(new contactsActions.LoadContactsFail(error)))
      );
    })
  );
}
