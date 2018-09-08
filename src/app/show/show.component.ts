import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  @Input() contact;

  @Input()
  edit: boolean = false;

  form: FormGroup;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(this.contact && this.contact.firstname ? this.contact.firstname : ''),
      lastname: new FormControl(this.contact && this.contact.lastname ? this.contact.lastname : ''),
      email: new FormControl(this.contact && this.contact.email ? this.contact.email : ''),
      phone: new FormControl(this.contact && this.contact.phone ? this.contact.phone : ''),
      birthday: new FormControl(this.contact && this.contact.birthday ? this.contact.birthday : '')
    })
  }

}
