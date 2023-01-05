import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimalInterface } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAnimals(): Observable<AnimalInterface> {
    return this.http.get<AnimalInterface>('/api/animals');
  }
}
