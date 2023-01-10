import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSiteComponent } from './components/sites/home-site/home-site/home-site.component';
import { AnimalCardModule } from './components/animal-card/animal-card.module';
import { AnimalSiteModule } from './components/sites/animal-site/animal-site.module';

@NgModule({
  declarations: [AppComponent, HomeSiteComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AnimalCardModule,
    AnimalSiteModule,
  ],
})
export class AppModule {}
