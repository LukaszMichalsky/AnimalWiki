import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  title = 'AnimalWiki';

  constructor(apiService: ApiService) {
    apiService
      .getAnimals$()
      .pipe(tap((res) => console.log(res)))
      .subscribe();
  }
}
