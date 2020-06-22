import { URL } from './../../core/urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExpensesService {

    constructor(private http: HttpClient) { }

    public getExpenses(): Observable<any> {
        return this.http.get<any>(`${URL.localhost}/${URL.expenses}`);
    }
    
    public getExpensesById(id: number): Observable<any> {
        return this.http.get<any>(`${URL.localhost}/${URL.expenses}/${id}`);
    }
    
    public setExpenses(formData): Observable<any> {
        return this.http.post<any>(`${URL.localhost}/${URL.expenses}`, formData);
    }
}
