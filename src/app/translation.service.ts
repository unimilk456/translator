// import { TextAreaComponent } from './text-area/text-area.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from './../environments/environment';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private httpClient: HttpClient) {}

  public translate(
    sourceText,
    sourceLanguage,
    targetLanguage
  ): Observable<any> {
    const KEY = environment.translatorTextSubscritionKey;
    const END_POINT = `${environment.translatorTextEndpoint}/translate`;
    const REGION = environment.subscriptionRegion;

    return this.httpClient
      .post<any>(END_POINT, [{ text: sourceText }], {
        headers: {
          'Ocp-Apim-Subscription-Key': KEY,
          'Ocp-Apim-Subscription-Region': REGION,
        },
        params: {
          'api-version': '3.0',
          from: sourceLanguage,
          to: targetLanguage,
        },
      })
      .pipe(
        map((response) => {
          return response[0]['translations'][0].text;
        })
      );
  }
}
