import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChooseQuantityComponent } from './choose-quantity/choose-quantity.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, ChooseQuantityComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
