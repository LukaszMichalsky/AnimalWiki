import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCardComponent } from './animal-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AnimalCardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [AnimalCardComponent],
})
export class AnimalCardModule {}
