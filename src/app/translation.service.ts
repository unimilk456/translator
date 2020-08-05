import { TextAreaComponent } from './text-area/text-area.component';
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
  constructor(private http: HttpClient, private textArea: TextAreaComponent) {}

  sentForTranslation(textToTranslation, fromLanguage, toLanguage) {

    console.log(textToTranslation, fromLanguage, toLanguage);
    const KEY = environment.translatorTextSubscritionKey;
    const END_POINT = `${environment.translatorTextEndpoint}/translate`;
    const REGION = environment.subscriptionRegion;

    const HTTP_PARAMS = new HttpParams()
      .set('api-version', '3.0')
      .set('to', toLanguage)
      .set('from', fromLanguage);

    const HTTP_HEADERS = {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': KEY,
      'Ocp-Apim-Subscription-Region': REGION,
    };
    // alert('enterrrrrrr')
    return this.http
      .post(END_POINT, [{ text: textToTranslation }], {
        headers: HTTP_HEADERS,
        params: HTTP_PARAMS,
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        map((data) => {
          //  console.log({translation: data[0]['translations'][0]['text'],
          //  to: data[0]['translations'][0]['to']});
          // let langList = data['translation'];
          //  console.log({ text: data });
          return {
            textToTranslation,
            fromLanguage,
            translation: data[0]['translations'][0]['text'],
            toLanguage: data[0]['translations'][0]['to'],
          };
        })
      )
      .subscribe((response) => {
        this.textArea.setTranslatedText(response['translation']);
        console.log('POST call in error', response);
        error: (error) => console.error('There was an error!', error);
      });
  }
}
