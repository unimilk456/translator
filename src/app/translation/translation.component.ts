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
    sourceLanguage: ['', [Validators.required]],
    sourceText: ['', [Validators.required]],
    targetLanguage: [''],
    targetText: [''],
  });
  // ngOnInit() {

  // this.onChanges();
  // }
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

  get _sourceText() {
    return this.form.get('sourceText');
  }
  get _sourceLanguage() {
    return this.form.get('sourceLanguage');
  }

  // onChanges(): void {
  //   this.form.valueChanges.subscribe(val => {
  //     this.formattedMessage =
  //     `Hello,

  //     My name is ${val.name} and my email is ${val.email}.

  //     I would like to tell you that ${val.message}.`;
  //   });
  // }
}

