import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  Subject,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import {
  AnimalInterface,
  Biomes,
  Continents,
  DLC,
} from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'animal-site',
  templateUrl: './animal-site.component.html',
  styleUrls: ['./animal-site.component.scss'],
})
export class AnimalSiteComponent implements OnInit {
  private readonly subject: BehaviorSubject<AnimalInterface[]> =
    new BehaviorSubject<AnimalInterface[]>([]);

  animals$: Observable<AnimalInterface[]> = this.subject.asObservable();

  readonly dlc = DLC;
  readonly continents = Continents;
  readonly biomes = Biomes;

  readonly searchForm: FormGroup = this.formBuilder.group({
    animal: ['', Validators.minLength(2)],
    dlc: '',
    continent: '',
    biome: '',
  });

  constructor(
    private readonly _apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this._apiService
      .getAnimals$()
      .pipe(
        take(1),
        tap((response) => {
          this.subject.next(response);
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}

  search() {
    this.animals$
      .pipe(
        map((animals) =>
          animals.filter((animal) =>
            animal.Name.toLowerCase().includes(
              this.searchForm.get('animal')?.value.toLowerCase()
            )
          )
        ),
        tap((animals) => console.log(this.animals$))
      )
      .subscribe();
  }

  reset() {
    this.searchForm.reset();
    this._apiService
      .getAnimals$()
      .pipe(
        tap((response) => {
          this.subject.next(response);
        })
      )
      .subscribe();
  }
}
