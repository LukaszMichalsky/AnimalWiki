import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-animal-modal',
  templateUrl: './add-animal-modal.component.html',
  styleUrls: ['./add-animal-modal.component.scss'],
})
export class AddAnimalModalComponent implements OnInit {
  createAnimalForm: FormGroup = this.formBuilder.group({
    name: '',
    dlc: '',
    groupSize: '',
    biomes: '',
    continents: '',
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
