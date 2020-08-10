import { Language } from './../language';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TranslationService } from './../translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
})
export class TranslationComponent implements OnDestroy {
  public readonly form = this.fb.group({
    sourceLanguage: ['en', [Validators.required]],
    sourceText: ['he', [Validators.required]],
    targetLanguage: ['ru'],
    targetText: [''],
  });
  ngOnInit() {
    // localStorage.clear();
    this.onChanges();
  }
  private readonly componentDestroyed$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private translationService: TranslationService
  ) {}

  public ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  public translate(): void {
    const { sourceText, sourceLanguage, targetLanguage } = this.form.value;

    this.translationService
      .translate(sourceText, sourceLanguage, targetLanguage)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((response) => {
        this.form.controls.targetText.setValue(response);
      });
  }

  onChanges(): void {
    this.form.get('targetText').valueChanges.subscribe((val) => {
      let it = localStorage.getItem('translatorApp');
      localStorage.setItem('translatorApp', it === null ? val : `${it},${val}`);
    });
  }
}
