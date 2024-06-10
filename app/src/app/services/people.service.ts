import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Person } from "../models/person.model";
import { Observable } from "rxjs";

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
}