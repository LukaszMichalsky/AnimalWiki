import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalSiteComponent } from './components/sites/animal-site/animal-site.component';
import { HomeSiteComponent } from './components/sites/home-site/home-site/home-site.component';

const routes: Routes = [
  { path: '', component: HomeSiteComponent },
  {
    path: 'animals',
    component: AnimalSiteComponent,
  },
  // {
  //   path: '**', Wildcard
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
