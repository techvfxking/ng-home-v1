import { NgModule } from '@angular/core';
import { BrowserModule, provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { provideRouter } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeComponent],
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(AppRoutingModule),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
