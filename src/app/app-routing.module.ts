import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TranslationListComponent } from './translation-list/translation-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationComponent } from './translation/translation.component';
import { TranslatedTextComponent } from './translated-text/translated-text.component';

const routes: Routes = [
  { path: 'translationlist', component: TranslationListComponent },
  { path: 'addTranslation', component: TranslationComponent },
  { path: 'text/:id', component: TranslatedTextComponent },
  { path: '', redirectTo: '/addTranslation', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
