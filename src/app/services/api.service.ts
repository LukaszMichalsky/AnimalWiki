import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimalInterface } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _url: string = 'http://localhost:9000';
  constructor(private http: HttpClient) {}

  getAnimals$(): Observable<AnimalInterface> {
    return this.http.get<AnimalInterface>(this._url + '/api/animals');
  }
}
