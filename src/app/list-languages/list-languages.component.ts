import { Component, OnDestroy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Language } from './../language';
import { FetchLanguagesListService } from './../fetch-languages-list.service';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ListLanguagesComponent),
    },
  ],
})
export class ListLanguagesComponent implements OnDestroy, ControlValueAccessor {
  private readonly componentDestroyed$ = new Subject<void>();

  constructor(private listService: FetchLanguagesListService) {
    this.loadLanguages();
  }

  public languages: Language[] = [];
  public displayDropdown: boolean = false;

  public innerValue: Language['code'] = 'en';
  public languageTitle: Language['name'];

  public onChange: () => void;

  public registerOnTouched(fn: () => void): void {}

  public writeValue(value: Language['code']): void {
    this.innerValue = value;
  }

  public writeLanguageTitle(value: Language['name']): void {
    this.languageTitle = value;
  }

  public registerOnChange(fn: (_: any) => void): void {
    this.onChange = () => {
      fn(this.innerValue);
    };
  }

  public ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  setLanguage(language: Language['code'], title: Language['name']): void {
    this.writeValue(language);
    this.writeLanguageTitle(title);

    this.onChange();
    this.displayDropdown = false;
  }

  private loadLanguages(): void {
    this.listService
      .fetchLanguagesList()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((languages) => {
        this.languages = languages.sort(this.compare);
        if (this.innerValue) {
          this.setLanguageTitle();
        }
      });
  }
  
  private setLanguageTitle(): void {
    this.languageTitle = this.languages.find(
      (language) => language.code === this.innerValue
    ).name;
  }

  private compare(a, b): number {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
}
