import { Component, OnInit } from '@angular/core';
import { TranslationService } from './../translation.service'

@Component({
  selector: 'translate-button',
  templateUrl: './translate-button.component.html',
  styleUrls: ['./translate-button.component.scss'],
})
export class TranslateButtonComponent implements OnInit {
  title = 'Translate!!';
  isClicked: boolean;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {}

  getTitle(): string {
    return this.title;
  }

  getIsClicked() {
    return this.isClicked;
  }

  onClick() {
    this.translationService.sentForTranslation('hi', 'en', 'ru');
    //  alert ('ddd');
  }
}
