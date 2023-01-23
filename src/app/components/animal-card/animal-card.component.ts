import { Component, Input, OnInit } from '@angular/core';
import { AnimalInterface } from 'src/app/models/models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnimalDetailModalComponent } from '../modals/animal-detail-modal/animal-detail-modal.component';

@Component({
  selector: 'animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss'],
})
export class AnimalCardComponent {
  @Input() animalData: AnimalInterface;

  private modalDialog: MatDialogRef<AnimalDetailModalComponent>;

  constructor(private readonly _matDialog: MatDialog) {}

  openAnimalModal() {
    this._matDialog.open(AnimalDetailModalComponent, {
      data: this.animalData,
      disableClose: true,
    });
  }
}
