import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimalSiteComponent } from './components/animal-site/animal-site.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'animals',
    component: AnimalSiteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
