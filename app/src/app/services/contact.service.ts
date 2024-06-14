import { Contact } from './../models/contact.mode';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    protected baseUrl = 'http://localhost/api/contacts';

    constructor(
        private http: HttpClient
    ){}

    getByID(id: number): Observable<Contact>{
        return this.http.get<Contact>(`${this.baseUrl}/${id}`);
    }

    update(contact: Contact): Observable<Contact>{
        return this.http.put<Contact>(`${this.baseUrl}/${contact.id}`, contact);
    }

    create(contact: Contact): Observable<Contact>{
        return this.http.post<Contact>(`${this.baseUrl}`, contact);
    }

    delete(id: number): Observable<Contact>{
        return this.http.delete<Contact>(`${this.baseUrl}/${id}`);
    }
}