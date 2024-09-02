import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioPartComponent } from './portfolio-part/portfolio-part.component';
import { PortfolioTemplateComponent } from './portfolio-template/portfolio-template.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ImprintComponent } from './footer/imprint/imprint.component';
import { DataprotectionComponent } from './footer/dataprotection/dataprotection.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http);  //for local tests
// }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/portfolio/assets/i18n/');  //for server
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioPartComponent,
    PortfolioTemplateComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    DataprotectionComponent,
    PortfolioPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
