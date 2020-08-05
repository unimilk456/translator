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

          // console.log(data);
          // let langList = data['translation'];
          // return Object.values(langList).map((rec) => {
          //   // console.log(f[rec.nativeName]);
          //   return { name: rec['name'], nativeName: rec['nativeName'] };
          // });
        })
      );
    // .toPromise()
    // .then((data: any) => {
    // data.data.languages.map((it) => console.log(it));
    // });
    // const result = await axios({
    //   method: 'GET',
    //   url:
    //     'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
    //   headers: {
    //     'content-type': 'application/octet-stream',
    //     'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    //     'x-rapidapi-key': '674985a3b1msh7cebb6082594bd6p1bb7efjsne7eeb92689e9',
    //     'accept-encoding': 'application/gzip',
    //     useQueryString: true,
    //   },
    // }).data.languages;
  }
}
