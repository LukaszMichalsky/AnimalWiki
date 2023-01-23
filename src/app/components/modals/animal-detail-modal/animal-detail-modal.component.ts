import { Component, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalInterface } from 'src/app/models/models';

@Component({
  selector: 'animal-detail-modal',
  templateUrl: './animal-detail-modal.component.html',
  styleUrls: ['./animal-detail-modal.component.scss'],
})
export class AnimalDetailModalComponent {
  @HostListener('window:keyup.esc') onKeyUp() {
    this._matDialog.close();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public animal: AnimalInterface,
    private _matDialog: MatDialogRef<AnimalDetailModalComponent>
  ) {}

  close() {
    this._matDialog.close();
  }
}
