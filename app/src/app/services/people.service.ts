import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Person } from "../models/person.model";
import { Observable } from "rxjs";
import { Pagination } from "../models/pagination.model";

@Injectable({
    providedIn: 'root',
})
export class PeopleService {
    protected baseUrl = 'http://localhost/api/people';

    constructor(
        private http: HttpClient
    ){}

    getAll(): Observable<Pagination>{
        return this.http.get<Pagination>(`${this.baseUrl}`);
    }

    getByID(id: number): Observable<Person>{
        return this.http.get<Person>(`${this.baseUrl}/${id}`);
    }

    getContacts(id: number): Observable<Pagination> {
        return this.http.get<Pagination>(`${this.baseUrl}/${id}/contacts`);
    }
}