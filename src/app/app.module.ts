import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslateButtonComponent } from './translate-button/translate-button.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ListLanguagesComponent } from './list-languages/list-languages.component';
import { FetchLanguagesListService } from './fetch-languages-list.service';
import { TranslationService } from './translation.service';
import { TranslationComponent } from './translation/translation.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslateButtonComponent,
    TextAreaComponent,
    ListLanguagesComponent,
    TranslationComponent,
  ],
  imports: [BrowserModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  providers: [FetchLanguagesListService, TranslationService, TextAreaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
