import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarComponent } from './calendar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HeaderComponent } from './header/header.component';

@NgModule({
// declarations: [HomeComponent],
// exports: [HomeComponent],
imports: [CommonModule, TranslateModule, FormsModule, HttpClientModule],
declarations: [
  //HeaderComponent
  ],
})
export class CalendarModule {}
