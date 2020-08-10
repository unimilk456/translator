import { LocalStorageService } from './../local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-translated-text',
  templateUrl: './translated-text.component.html',
  styleUrls: ['./translated-text.component.scss'],
})
export class TranslatedTextComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private localStorage: LocalStorageService) {}
  translatedText: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.translatedText = this.localStorage.getTranslatedTextByIndex(
        params.get('id')
      );
    });
  }
}

