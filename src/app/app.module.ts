import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalSiteComponent } from './components/sites/animal-site/animal-site.component';
import { HomeSiteComponent } from './components/sites/home-site/home-site/home-site.component';

@NgModule({
  declarations: [AppComponent, AnimalSiteComponent, HomeSiteComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
