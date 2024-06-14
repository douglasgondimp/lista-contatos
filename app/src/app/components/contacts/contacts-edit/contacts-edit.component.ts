import { Component } from '@angular/core';
import { FormContactsComponent } from '../../forms/form-contacts/form-contacts.component';
import { Contact } from '../../../models/contact.mode';
import { ContactService } from '../../../services/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-edit',
  standalone: true,
  imports: [FormContactsComponent],
  providers: [ContactService],
  templateUrl: './contacts-edit.component.html',
  styleUrl: './contacts-edit.component.scss'
})
export class ContactsEditComponent {
  contact!: Contact;

  constructor(
    protected contactService: ContactService,
    protected actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.contactService.getByID(this.actRoute.snapshot.params['id']).subscribe((response) => {
      this.contact = response;
    });
  }
}
