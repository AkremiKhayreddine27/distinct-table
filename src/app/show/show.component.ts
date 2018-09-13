import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromStore from '../@core/store';
import * as faker from 'faker';
import { User, Group } from '../@core/models';
import { Observable } from 'rxjs';
import { FilterConf } from '../@core/store/helpers';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit, AfterViewInit {
  @Input()
  contact: User;

  @Input()
  edit: Boolean = false;

  form: FormGroup;

  groups$: Observable<Group[]>;
  contactGroups$: Observable<Group[]>;

  constructor(
    private store: Store<fromStore.LocatusState>,
    public activeModal: NgbActiveModal
  ) {}

  ngAfterViewInit() {
    if (this.contact && this.contact.groups) {
      const filters = [];
      for (const groupId of this.contact.groups) {
        filters.push({
          field: 'id',
          search: groupId.toString(),
          filter: (cell: any, search: any) => {
            return cell.toString() === search;
          }
        });
      }
      const filterConf: FilterConf = {
        filters,
        andOperator: false
      };
      this.store.dispatch(new fromStore.LoadGroups(filterConf));
    }
  }

  ngOnInit() {
    this.groups$ = this.store.select<Group[]>(fromStore.getAllGroups);
    this.contactGroups$ = this.store
      .select<Group[]>(fromStore.getPaginatedSortedFiltredGroups)
      .pipe(delay(50));
    this.form = new FormGroup({
      id: new FormControl(faker.random.number()),
      firstname: new FormControl(
        this.contact && this.contact.firstname ? this.contact.firstname : ''
      ),
      lastname: new FormControl(
        this.contact && this.contact.lastname ? this.contact.lastname : ''
      ),
      email: new FormControl(
        this.contact && this.contact.email ? this.contact.email : ''
      ),
      phone: new FormControl(
        this.contact && this.contact.phone ? this.contact.phone : ''
      ),
      location: new FormGroup({
        address: new FormControl(
          this.contact && this.contact.location
            ? this.contact.location.address
            : ''
        ),
        postcode: new FormControl(
          this.contact && this.contact.location
            ? this.contact.location.postcode
            : ''
        ),
        city: new FormControl(
          this.contact && this.contact.location
            ? this.contact.location.city
            : ''
        ),
        state: new FormControl(
          this.contact && this.contact.location
            ? this.contact.location.state
            : ''
        ),
        country: new FormControl(
          this.contact && this.contact.location
            ? this.contact.location.country
            : ''
        )
      }),
      groups: new FormControl(
        this.contact && this.contact.groups ? this.contact.groups : []
      ),
      createdAt: new FormControl(new Date())
    });
  }

  get location(): FormGroup {
    return this.form.get('location') as FormGroup;
  }

  save() {
    this.store.dispatch(new fromStore.CreateContact(this.form.value));
    this.activeModal.dismiss();
  }
}
