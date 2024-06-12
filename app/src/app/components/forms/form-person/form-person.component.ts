import { Component, Input } from '@angular/core';
import { Person } from '../../../models/person.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-person.component.html',
  styleUrl: './form-person.component.scss'
})
export class FormPersonComponent {
  @Input() dataPerson?: Person

  person: Person = {
    name: '',
    cpf: '',
    email: '',
    phone: '',
    birth_date: null
  }

  ngOnInit(): void {
    if (this.dataPerson) {
      this.person = this.dataPerson;
    }
  }

  sendForm() {
    console.log("dados enviados");
  }
}
