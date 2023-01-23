import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCardModule } from '../../animal-card/animal-card.module';
import { AnimalSiteComponent } from './animal-site.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AnimalSiteComponent],
  imports: [CommonModule, AnimalCardModule, ReactiveFormsModule],
})
export class AnimalSiteModule {}
