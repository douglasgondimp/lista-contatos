import { Component, Input } from '@angular/core';
import { Person } from '../../../models/person.model';
import { FormsModule } from '@angular/forms';
import { PeopleService } from '../../../services/people.service';
import { Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-form-person',
  standalone: true,
  imports: [FormsModule, NgxMaskDirective],
  providers: [PeopleService, provideNgxMask()],
  templateUrl: './form-person.component.html',
  styleUrl: './form-person.component.scss'
})
export class FormPersonComponent {
  @Input() dataPerson?: Person
  protected router!: Router;

  person: Person = {
    id: null,
    name: '',
    cpf: '',
    email: '',
    phone: '',
    birth_date: null
  }

  constructor(
    protected peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    if (this.dataPerson) {
      this.person = this.dataPerson;
    }
  }

  sendForm() {
    if (this.person.id) {
      this.peopleService.update(this.person).subscribe(
        (response) => {
          this.router.navigate(['/people']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.peopleService.create(this.person).subscribe(
        (response) => {
          this.router.navigate(['/people']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
