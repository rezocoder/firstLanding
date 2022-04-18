import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home.component';
//import { HeaderComponent } from './header/header.component';

@NgModule({
// declarations: [HomeComponent],
// exports: [HomeComponent],
imports: [CommonModule, TranslateModule],
declarations: [
  //HeaderComponent
],
})
export class HomeModule {}