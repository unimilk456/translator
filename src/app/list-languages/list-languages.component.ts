import { Language } from './../language';
import { TranslateButtonComponent } from './../translate-button/translate-button.component';
import { Component, OnInit } from '@angular/core';
import { FetchLanguagesListService } from './../fetch-languages-list.service';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.scss'],
})
export class ListLanguagesComponent implements OnInit {
  // listLanguages: Language[];
  listLanguages: Language[];
  public show: boolean = false;
  fromLanguage: string = 'Language';

  // listLanguages = ['English', 'Russian', 'German'];

  constructor(private listService: FetchLanguagesListService) {}

  ngOnInit(): void {
    this.setListLanguages();
  }

  onClickItem() {
    let u = [
      { id: 1, name: 'ddd' },
      { id: 2, name: 'ff' },
      { id: 3, name: 'jgg' },
    ];
    // console.log(this.listLanguages);
  }
  setListLanguages(): void {
    this.listService.fetchLanguagesList().subscribe((listLanguages) => {
      //  console.log(listLanguages);
      //  this.listLanguages = listLanguages;
      //   console.log(instanceOf(listLanguages), listLanguages);

      // this.listLanguages = listLanguages;

      // const f = JSON.parse(listLanguages);
      // const g = f.translation;

      // this.listLanguages = Object.values(listLanguages["translation"]).reduce<string[]>(
      //   (acc, rec) => {
      //     // console.log(f[rec.nativeName]);
      //     return  [...acc, rec['nativeName']];
      //   },  []
      // );
      console.log(listLanguages);
      this.listLanguages = listLanguages;

      // this.listLanguages = d
      // this.listLanguages =
      // listLanguages.translation.languages.reduce(
      //   (acc, rec, ind) => {
      //     return [...acc, rec.language];
      //   },
      //   []
      // );
    });
  }
  getlistLanguages(): string[] {
    return this.listLanguages.map((it) => it['name']);
  }

  toggle(): void {
    this.show = !this.show;
  }

  clickLanguage($event): void {
    this.fromLanguage = $event.target.innerHTML;
    this.toggle();
  }
}
