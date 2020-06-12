import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'portfolio', component: PortfolioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumeComponent,
    HomeComponent,
    TechnicalSkillsComponent,
    ContactMeComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
