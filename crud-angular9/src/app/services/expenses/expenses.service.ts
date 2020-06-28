import { URL } from './../../core/urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpensesModel } from 'src/app/shared/models/expenses.model';

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
    
    public setExpenses(formData: ExpensesModel): Observable<any> {
        return this.http.post<any>(`${URL.localhost}/${URL.expenses}`, formData);
    }
    
    public deleteExpense(idExpense: number): Observable<any> {
        return this.http.delete<any>(`${URL.localhost}/${URL.expenses}/${idExpense}`);
    }
    
    public updateExpense(formData: ExpensesModel): Observable<any> {
        return this.http.put<any>(`${URL.localhost}/${URL.expenses}/${formData.id}`, formData);
    }
}
