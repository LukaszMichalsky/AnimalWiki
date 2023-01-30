import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddAnimalModalComponent } from './components/modals/add-animal-modal/add-animal-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  showMenu: boolean = false;
  title = 'AnimalWiki';

  constructor(
    private readonly _router: Router,
    private _matDialog: MatDialog
  ) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  navigateTo(url: string) {
    this._router.navigateByUrl(url);
  }

  addAnimal() {
    this._matDialog.open(AddAnimalModalComponent);
  }
}
