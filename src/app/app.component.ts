import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ICalendarsConfig } from './calendars/abstract/icards.config';
import { DBService } from './db/db.service';
import { IBetslip } from './db/models/iticket';
import { HttpRequestService } from './services/http-request.service';
import { TranslateConfigService } from './services/translate-config.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json';
  betslip!: IBetslip[];






  playerDataDates: ICalendarsConfig = {
    size: 'normal'
  }

  leaderboardDates: ICalendarsConfig = {
    size: 'small'
  }
  //playerData?: IDate;












  changeDefaultLanguage(langType: string) {
    this.translateConfigService.changeLanguage(langType);
  }

  constructor(
    private translateConfigService: TranslateConfigService, private httpRequestService: HttpRequestService
  ) { }

  ngOnInit() {
    this.httpRequestService.getData()
      .subscribe(data => /*console.log(*/data.currentDate/*)*/);

    // this.httpRequestService.getTickets('')
    //   .subscribe(data => {
    //   })

  }
}
