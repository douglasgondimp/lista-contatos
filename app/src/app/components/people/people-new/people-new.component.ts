import { Component } from '@angular/core';
import { FormPersonComponent } from '../../forms/form-person/form-person.component';

@Component({
  selector: 'app-people-new',
  standalone: true,
  imports: [FormPersonComponent],
  templateUrl: './people-new.component.html',
  styleUrl: './people-new.component.scss'
})
export class PeopleNewComponent {

}
