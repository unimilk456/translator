import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatedTextComponent } from './translated-text.component';

describe('TranslatedTextComponent', () => {
  let component: TranslatedTextComponent;
  let fixture: ComponentFixture<TranslatedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
