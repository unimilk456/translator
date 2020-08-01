import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Language } from './language';
import { map, filter, switchMap } from 'rxjs/operators';

const axios = require('axios');

@Injectable({
  providedIn: 'root',
})
export class FetchLanguagesListService {

  constructor(private http: HttpClient, private httpParams: HttpParams) {}

  fetchLanguagesList(): Observable<Language[]> {
    
    this.httpParams = this.httpParams.set('api-version', '3.0');
    return this.http
      .get<Language[]>(
        'https://api.cognitive.microsofttranslator.com/languages',
        {
          headers: {
            'content-type': 'application/json',
            // 'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
            // 'x-rapidapi-key':
            // '674985a3b1msh7cebb6082594bd6p1bb7efjsne7eeb92689e9',
            // 'Postman-Token': 'e51c955e-8f7b-49cc-a1f6-b0399b971e4e',
            // host: 'api.cognitive.microsofttranslator.com',
            // 'accept-encoding': 'gzip, deflate, br',
            // accept: '*/*',
            // 'cache-control': 'no-cache',
          },
          params: this.httpParams,
          observe: 'body',
          responseType: 'json',
        }
      )
      .pipe(
        map((data) => {
          // console.log(data);
          let langList = data['translation'];
          return Object.values(langList).map((rec) => {
            // console.log(f[rec.nativeName]);
            return { name: rec["name"], nativeName: rec["nativeName"] };
          });
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
