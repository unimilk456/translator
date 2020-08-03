import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from './../environments/environment';
// import { Translation } from './translation';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private http: HttpClient, private httpParams: HttpParams) {}

  sentForTranslation(): Observable<string> {
    const KEY = environment.translatorTextSubscritionKey;
    const END_POINT = environment.translatorTextEndpoint;
    const REGION = environment.subscriptionRegion;

    this.httpParams = this.httpParams
      .set('api-version', '3.0')
      .set('to', 'ru')
      .set('from', 'de');

    const HTTP_HEADERS = {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': KEY,
      'Ocp-Apim-Subscription-Region': REGION,
    };

    return this.http.post<any>(
      END_POINT,
      { text: 'hi' },
      {
        headers: HTTP_HEADERS,
        // params: this.httpParams,
        observe: 'body',
        responseType: 'json',
      }
    );
    // .pipe(
    //   map((data) => {
    //     console.log(data);
    //     let langList = data['dictionary'];
    //     return Object.entries(langList).map(([key, val]) => {
    //       // console.log(f[rec.nativeName]);
    //       return '';
    //     });
    //   })
    // );
  }
}
