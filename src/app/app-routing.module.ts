import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TranslationListComponent } from './translation-list/translation-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationComponent } from './translation/translation.component';

const routes: Routes = [
  { path: 'translationlist', component: TranslationListComponent },
  { path: 'translation', component: TranslationComponent },
  { path: '', redirectTo: '/translation', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
