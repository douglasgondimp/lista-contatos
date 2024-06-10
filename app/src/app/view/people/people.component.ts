import { NgFor } from '@angular/common';
import { PeopleService } from '../../services/people.service';
import { Person } from './../../models/person.model';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [NgFor, RouterLink],
  providers: [PeopleService],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {
  people: Person[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getAll().subscribe((people) => {
      this.people = people;
    });
  }

}
