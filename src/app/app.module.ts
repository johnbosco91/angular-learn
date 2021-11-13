import { FamiliaService } from './familia.service';
import { FamiliaComponent } from './familia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalimuComponent } from './walimu/walimu.component';

@NgModule({
  declarations: [
    AppComponent,
    FamiliaComponent,
    WalimuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FamiliaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
