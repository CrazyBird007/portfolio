import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './footer/imprint/imprint.component';
import { AppComponent } from './app.component';
import { DataprotectionComponent } from './footer/dataprotection/dataprotection.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

const routes: Routes = [
  { path: '', component: PortfolioPageComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'dataprotection', component: DataprotectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
