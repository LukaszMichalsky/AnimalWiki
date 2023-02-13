import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Biomes, Continents, DLC } from 'src/app/models/models';

@Component({
  selector: 'add-animal-modal',
  templateUrl: './add-animal-modal.component.html',
  styleUrls: ['./add-animal-modal.component.scss'],
})
export class AddAnimalModalComponent {
  readonly continents = Continents;
  readonly dlc = DLC;
  readonly biomes = Biomes;

  createAnimalForm: FormGroup = this.formBuilder.group(
    {
      name: '',
      dlc: '',
      groupSize: '',
      biomes: '',
      continents: '',
    },
    Validators.required
  );

  constructor(
    private readonly formBuilder: FormBuilder,
    private _matDialog: MatDialogRef<AddAnimalModalComponent>
  ) {}

  close() {
    this._matDialog.close();
  }

  submit() {
    console.log(this.createAnimalForm.value);
    this._matDialog.close();
  }
}
