import { LocalStorageService } from './../local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-translated-text',
  templateUrl: './translated-text.component.html',
  styleUrls: ['./translated-text.component.scss'],
})
export class TranslatedTextComponent implements OnInit {
  private readonly componentDestroyed$ = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  translatedText: string;

  public ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((params) => {
        this.translatedText = this.localStorage.getTranslatedTextByIndex(
          params.get('id')
        );
      });
  }
}
