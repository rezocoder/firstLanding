import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IDate } from 'src/app/db/models/idate';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  days!: Observable<IDate[]>;
  data!: IDate;
  constructor(private translateConfigService: TranslateConfigService, private httpRequestService: HttpRequestService) { 
    //this.days = this.httpRequestService.getData();
  }

  ngOnInit(): void {
    this.httpRequestService.getData()
      .subscribe(data => this.data = data);
  }

}
