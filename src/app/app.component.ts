import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
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

  constructor(private readonly _router: Router) {}

  navigateTo(url: string) {
    this._router.navigateByUrl(url);
  }
}
