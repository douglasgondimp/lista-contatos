import { Routes } from '@angular/router';
import { PeopleComponent } from './view/people/people.component';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';
import { PeopleEditComponent } from './components/people/people-edit/people-edit.component';
import { PeopleNewComponent } from './components/people/people-new/people-new.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pessoas',
        pathMatch: 'full'
    },
    {
        path: 'pessoas',
        component: PeopleComponent,
    },
    {
        path: 'pessoas/novo',
        component: PeopleNewComponent
    },
    {
        path: 'pessoas/:id/editar',
        component: PeopleEditComponent
    },
    {
        path: 'pessoas/:id/contatos',
        component: ContactsListComponent
    }
];
