import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';
import { AnimalSiteComponent } from './components/animal-site/animal-site.component';

@NgModule({
  declarations: [AppComponent, AnimalCardComponent, AnimalSiteComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
