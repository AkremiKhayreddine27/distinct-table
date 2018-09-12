import {
  ActionReducerMap,
  createFeatureSelector,
  MemoizedSelector
} from '@ngrx/store';
import * as fromContacts from './contacts.reducer';

export interface LocatusState {
  contacts: fromContacts.ContactsState;
}

export const reducers: ActionReducerMap<LocatusState> = {
  contacts: fromContacts.contactsReducer
};

export const getLocatusState = createFeatureSelector<LocatusState>('locatus');
