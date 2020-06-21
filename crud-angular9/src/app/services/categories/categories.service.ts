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
}
