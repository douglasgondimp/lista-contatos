import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormPersonComponent } from '../../forms/form-person/form-person.component';
import { Person } from '../../../models/person.model';
import { PeopleService } from '../../../services/people.service';

@Component({
  selector: 'app-people-edit',
  standalone: true,
  imports: [FormPersonComponent],
  providers: [PeopleService],
  templateUrl: './people-edit.component.html',
  styleUrl: './people-edit.component.scss'
})
export class PeopleEditComponent {
  personId!: number;
  person!: Person;

  constructor(
    private actRoute: ActivatedRoute,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.personId = this.actRoute.snapshot.params['id'];

    this.peopleService.getByID(this.personId).subscribe((person) => {
      this.person = person;
    });
  }
}
