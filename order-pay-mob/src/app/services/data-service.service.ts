import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesModel } from '../models/categories.model';
import { Data, Product } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  productsList: Product[] = [];
  constructor(private http: HttpClient) {}

  getAllData(): Observable<Data> {
    // return this.http.get<Data>('https://test.dev.al/test/');
    return this.http.get<Data>('assets/backend.json');
  }

  // getProductsByCategoryId():Observable<Data>{
  //   return 'test'
  // }
}
