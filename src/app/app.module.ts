import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';
import { ImmaginiComponent } from './immagini/immagini.component';
import { EventBindingComponent } from './event-binding/event-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    ImmaginiComponent,
    EventBindingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
