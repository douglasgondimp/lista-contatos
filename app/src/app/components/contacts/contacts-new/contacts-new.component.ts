import { Component } from '@angular/core';
import { FormContactsComponent } from '../../forms/form-contacts/form-contacts.component';
import { Person } from '../../../models/person.model';
import { PeopleService } from '../../../services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-new',
  standalone: true,
  imports: [FormContactsComponent],
  providers: [PeopleService],
  templateUrl: './contacts-new.component.html',
  styleUrl: './contacts-new.component.scss'
})
export class ContactsNewComponent {
  person!: Person;

  constructor(
    protected peopleService: PeopleService,
    protected actRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.peopleService.getByID(this.actRoute.snapshot.params['id']).subscribe((response) => {
      this.person = response;
    });
  } 
}
