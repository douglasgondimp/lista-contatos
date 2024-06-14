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
  

  person!: Person;

  constructor(
    protected peopleService: PeopleService,
    protected router: Router
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
          this.router.navigate(['/pessoas']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.peopleService.create(this.person).subscribe(
        (response) => {
          this.router.navigate(['/pessoas']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
