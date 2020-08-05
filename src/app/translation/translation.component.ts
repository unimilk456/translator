import { Component, OnInit } from '@angular/core';
import { TranslationService } from './../translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
})
export class TranslationComponent implements OnInit {
  sourceText: string = 'he';
  translatedText: string;
  constructor(
    private translationService: TranslationService,

  ) {}

  ngOnInit(): void {}

  setTranslatedText(translatedText: string) {
    this.translatedText = translatedText;
    console.log(this.translatedText);
  }

  getTranslatedText() {
    return this.translatedText;
  }

  getSourceText() {
    return this.sourceText;
  }

  onClick() {
    this.translationService.sentForTranslation(this.sourceText, 'en', 'ru');
  }

  onChangeSourceText(event) {
    this.sourceText = event.target.value;
  }
}
