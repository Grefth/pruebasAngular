import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    CrisisListComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'heroes', 
      component: HeroesListComponent},
      {path: 'crisis',
      component: CrisisListComponent},
      {path: 'index',
      component: IndexComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
