import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FreespinsComponent } from './freespins/freespins.component';
import { CalendarComponent } from './calendars/calendar/calendar.component';
import { SmallCalendarComponent } from './small-calendar/small-calendar.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { CalendarContentComponent } from './calendar-content/calendar-content.component';
import { FormsModule } from '@angular/forms';

export function rootLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
  }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FreespinsComponent,
    CalendarComponent,
    SmallCalendarComponent,
    LeaderBoardComponent,
    CalendarContentComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: rootLoaderFactory,
      deps: [HttpClient],
      },
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
