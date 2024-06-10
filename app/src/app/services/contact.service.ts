import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    protected baseUrl = 'http://localhost/api/contacts';

    constructor(
        private http: HttpClient
    ){}
}