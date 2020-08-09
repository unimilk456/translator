import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
})
export class TextAreaComponent implements OnInit {
  translation: string;

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
  }
}
