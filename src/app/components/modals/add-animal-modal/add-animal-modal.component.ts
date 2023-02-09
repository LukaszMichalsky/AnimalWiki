import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-animal-modal',
  templateUrl: './add-animal-modal.component.html',
  styleUrls: ['./add-animal-modal.component.scss'],
})
export class AddAnimalModalComponent {
  createAnimalForm: FormGroup = this.formBuilder.group({
    name: '',
    dlc: '',
    groupSize: '',
    biomes: '',
    continents: '',
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private _matDialog: MatDialogRef<AddAnimalModalComponent>
  ) {}

  close() {
    this._matDialog.close();
  }
}
