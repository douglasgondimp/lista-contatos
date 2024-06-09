import { Routes } from '@angular/router';
import { PeopleComponent } from './view/people/people.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pessoas',
        pathMatch: 'full'
    },
    {
        path: 'pessoas',
        component: PeopleComponent
    }
];
