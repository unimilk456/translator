import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslateButtonComponent } from './translate-button/translate-button.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ListLanguagesComponent } from './list-languages/list-languages.component';
import { FetchLanguagesListService } from './fetch-languages-list.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpParams} from '@angular/common/http';
import { TranslationService } from './translation.service';

@NgModule({
  declarations: [
    AppComponent,
    TranslateButtonComponent,
    TextAreaComponent,
    ListLanguagesComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    FetchLanguagesListService,
    HttpParams,
    TranslationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
