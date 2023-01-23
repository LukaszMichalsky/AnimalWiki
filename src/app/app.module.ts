import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalCardModule } from './components/animal-card/animal-card.module';
import { AnimalSiteModule } from './components/sites/animal-site/animal-site.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeSiteComponent } from './components/sites/home-site/home-site.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AnimalDetailModalComponent } from './components/modals/animal-detail-modal/animal-detail-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, HomeSiteComponent, AnimalDetailModalComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AnimalCardModule,
    AnimalSiteModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class AppModule {}
