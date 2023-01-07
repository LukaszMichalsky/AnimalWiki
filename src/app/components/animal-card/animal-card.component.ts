import { Component, Input, OnInit } from '@angular/core';
import { AnimalInterface } from 'src/app/models/models';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss'],
})
export class AnimalCardComponent implements OnInit {
  // @Input() animalData: AnimalInterface;
  constructor() {}

  ngOnInit(): void {}
}
