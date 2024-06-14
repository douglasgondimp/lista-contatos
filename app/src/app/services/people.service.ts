import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Person } from "../models/person.model";
import { Observable } from "rxjs";
import { Pagination } from "../models/pagination.model";
import { Contact } from "../models/contact.mode";

@Injectable({
    providedIn: 'root',
})
export class PeopleService {
    protected baseUrl = 'http://localhost/api/people';

    constructor(
        private http: HttpClient
    ){}

    getAll(): Observable<Person[]>{
        return this.http.get<Person[]>(`${this.baseUrl}`);
    }

    getByID(id: number): Observable<Person>{
        return this.http.get<Person>(`${this.baseUrl}/${id}`);
    }

    getContacts(id: number): Observable<Contact[]> {
        return this.http.get<Contact[]>(`${this.baseUrl}/${id}/contacts`);
    }

    update(person: Person): Observable<Person>{
        return this.http.put<Person>(`${this.baseUrl}/${person.id}`, person);
    }

    create(person: Person): Observable<Person>{
        return this.http.post<Person>(`${this.baseUrl}`, person);
    }
}