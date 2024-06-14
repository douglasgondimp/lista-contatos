import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../models/contact.mode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-contacts',
  standalone: true,
  imports: [FormsModule, NgxMaskDirective],
  providers: [ContactService, provideNgxMask()],
  templateUrl: './form-contacts.component.html',
  styleUrl: './form-contacts.component.scss'
})
export class FormContactsComponent {
  @Input() personId!: number|undefined;
  @Input() contactId!: number|null;

  contact!: Contact;

  constructor(
    protected contactService: ContactService,
    protected router: Router
  ) { }

  ngOnInit() {
    if (this.personId) {
      this.contact.person_id = this.personId;
    }

    if (this.contactId) {
      this.contactService.getByID(this.contactId).subscribe(contact => {
        this.contact = contact;
      });
    }
  }

  sendForm() {
    if (this.contact.id) {
      this.contactService.update(this.contact).subscribe(
        (response) => {
          this.router.navigate(['/pessoas/'+this.personId+'/contatos']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.contactService.create(this.contact).subscribe(
        (response) => {
          this.router.navigate(['/pessoas/'+this.personId+'/contatos']);
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }
}
