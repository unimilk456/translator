import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Language } from './language';
import { map, filter, switchMap } from 'rxjs/operators';
import { environment } from './../environments/environment';

// const axios = require('axios');

@Injectable({
  providedIn: 'root',
})
export class FetchLanguagesListService {
  constructor(private http: HttpClient) {}

  fetchLanguagesList(): Observable<Language[]> {
    const END_POINT = `${environment.translatorTextEndpoint}/languages`;

    return this.http
      .get<{ translation: { [key: string]: Language } }>(END_POINT, {
        params: { 'api-version': '3.0' },
      })
      .pipe(
        map((data) => {
          return Object.keys(data.translation).map((languageCode) => {
            const language = data.translation[languageCode];
            return {
              name: language.name,
              nativeName: language.nativeName,
              code: languageCode,
            };
          });
        })
      );
  }
}
