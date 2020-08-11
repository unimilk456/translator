import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  KEY_LOCAL_STORAGE = 'translatorApp';

  getTranslatedTextByIndex(index: string) {
    return localStorage.getItem(this.KEY_LOCAL_STORAGE).split(environment.separatorForLocalStorage)[+index];
  }

  getItem(key: string = this.KEY_LOCAL_STORAGE) {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  saveTranslatedText(text: string) {
    let translations = this.getItem();
    this.setItem(
      this.KEY_LOCAL_STORAGE,
      translations === null
        ? text
        : `${translations}${environment.separatorForLocalStorage}${text}`
    );
  }
}
