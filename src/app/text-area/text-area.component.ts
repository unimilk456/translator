import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  textToTranslation: string;
  translation: string;

  constructor() {}

  ngOnInit(): void {}

  getTextToTranslation() {}

  getTranslatedText() {}

  setTranslatedText(translation: string) {

    this.translation = translation;
    console.log(this.translation);
  }
  onChange(event){
    alert("!!!")
    this.textToTranslation = event.target.InnerHTML
  }
}
