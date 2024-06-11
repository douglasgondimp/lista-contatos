import { PeopleService } from './../../../services/people.service';
import { Component } from '@angular/core';
import { Contact } from '../../../models/contact.mode';
import { Pagination } from '../../../models/pagination.model';
import { routes } from '../../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Person } from '../../../models/person.model';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [NgFor, NgIf],
  providers: [PeopleService],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {
  person!: Person;
  person_id!: number;
  contacts!: Contact[];
  pagination!: Pagination;

  constructor(
    protected peopleService: PeopleService,
    protected actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.person_id = this.actRoute.snapshot.params['id']
    
    this.getContacts(this.person_id);
    this.getPerson(this.person_id);
  }


  getContacts(id: number) {
    this.peopleService.getContacts(id).subscribe((response) => {
      this.pagination = response;
      this.contacts = response.data;
    })
  }

  getPerson(id:number) {
    this.peopleService.getByID(id).subscribe((response) => {
      this.person = response;
    })
  }
}
