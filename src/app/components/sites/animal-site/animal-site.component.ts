import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { AnimalInterface } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-animal-site',
  templateUrl: './animal-site.component.html',
  styleUrls: ['./animal-site.component.scss'],
})
export class AnimalSiteComponent implements OnInit {
  // private readonly subject: BehaviorSubject<AnimalInterface[]> =
  //   new BehaviorSubject<AnimalInterface[]>([]);

  // animals$: Observable<AnimalInterface[]> = this.subject.asObservable();

  // constructor(private readonly _apiService: ApiService) {
  //   this._apiService
  //     .getAnimals$()
  //     .pipe(tap((response) => this.subject.next(response)))
  //     .subscribe();
  // }

  ngOnInit(): void {}
}
