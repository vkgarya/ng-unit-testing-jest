import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancelComponent } from './cancel/cancel.component';
import { DialogComponent } from './dialog/dialog.component';
import {
  MatDialogModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CancelComponent,
    DialogComponent
  ],
  exports: [
    MatDialogModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
