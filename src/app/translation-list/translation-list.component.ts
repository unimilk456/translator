import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';



@Component({
  selector: 'app-translation-list',
  templateUrl: './translation-list.component.html',
  styleUrls: ['./translation-list.component.scss'],
})
export class TranslationListComponent implements OnInit {
  translationList: string[];

  constructor() {}

  ngOnInit(): void {
    this.translationList = this.getTranslationList();
    console.log(localStorage.getItem('translatorApp').split(environment.separatorForLocalStorage));
  }
  getTranslationList(): string[] {
    return localStorage.getItem('translatorApp').split(environment.separatorForLocalStorage);
  }
  // todo переделать clearStorage
  clearStorage(): void {
    localStorage.clear();
    window.location.reload();
  }
}
