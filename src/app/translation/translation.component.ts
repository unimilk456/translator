import { LocalStorageService } from './../local-storage.service';
import { Language } from './../language';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { TranslationService } from './../translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
})
export class TranslationComponent implements OnDestroy {
  public readonly form = this.fb.group({
    sourceLanguage: ['en', [Validators.required]],
    sourceText: ['', [Validators.required]],
    targetLanguage: ['ru'],
    targetText: [''],
  });

  private readonly componentDestroyed$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private translationService: TranslationService,
    private localStorage: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  indexTargetText: number;

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
        this.SaveAndNavigate(response);
      });
  }

  SaveAndNavigate(text) {
    this.localStorage.saveTranslatedText(text);
    this.indexTargetText = this.localStorage.getItem().split(',').length-1;
    this.router.navigate(['/text', this.indexTargetText]);
  }
}
