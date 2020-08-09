import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translation-list',
  templateUrl: './translation-list.component.html',
  styleUrls: ['./translation-list.component.scss']
})
export class TranslationListComponent implements OnInit {
  translationList: string[];

  constructor() {
  }

  ngOnInit(): void {

    this.translationList = this.getTranslationList();
    console.log(localStorage.getItem('translatorApp').split(','));
  }
  getTranslationList(): string[] {
    return localStorage.getItem('translatorApp').split(',');
  }
}
