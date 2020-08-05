import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslateButtonComponent } from './translate-button/translate-button.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ListLanguagesComponent } from './list-languages/list-languages.component';
import { FetchLanguagesListService } from './fetch-languages-list.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpParams, HttpHeaders} from '@angular/common/http';
import { TranslationService } from './translation.service';
import { FormsModule } from '@angular/forms';
import { TranslationComponent } from './translation/translation.component';


@NgModule({
  declarations: [
    AppComponent,
    TranslateButtonComponent,
    TextAreaComponent,
    ListLanguagesComponent,
    TranslationComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [
    FetchLanguagesListService,
    HttpParams,
    TranslationService,
    TextAreaComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
