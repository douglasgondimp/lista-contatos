import { Routes } from '@angular/router';
import { PeopleComponent } from './view/people/people.component';
import { ContactsListComponent } from './components/contacts/contacts-list/contacts-list.component';
import { PeopleEditComponent } from './components/people/people-edit/people-edit.component';

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
        path: 'pessoas/:id',
        component: PeopleEditComponent
    },
    {
        path: 'pessoas/:id/contatos',
        component: ContactsListComponent
    }
];
