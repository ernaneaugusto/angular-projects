import { FormGroup } from '@angular/forms';
import { CategoriesModel } from './../../shared/models/categories.model';
import { URL } from './../../core/urls';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    constructor(private http: HttpClient) { }

    public getCategories(): Observable<CategoriesModel[]> {
        return this.http.get<CategoriesModel[]>(`${URL.localhost}/${URL.categories}`);
    }

    public getCategoriesById(id: number): Observable<CategoriesModel> {
        return this.http.get<CategoriesModel>(`${URL.localhost}/${URL.categories}/${id}`);
    }

    public setCategoriesById(formData: FormGroup): Observable<any> {
        const id: number = formData.value.id;
        return this.http.put<any>(`${URL.localhost}/${URL.categories}/${id}`, formData.value);
    }

    public setCategories(data): Observable<any> {
        return this.http.post<any>(`${URL.localhost}/${URL.categories}`, data);
    }

    public updateCategories(data): Observable<any> {
        return this.http.put<any>(`${URL.localhost}/${URL.categories}`, data);
    }
    
    public deleteCategories(id: number): Observable<any> {
        return this.http.delete<any>(`${URL.localhost}/${URL.categories}/${id}`);
    }

}
