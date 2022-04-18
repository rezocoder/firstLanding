import { Component, OnInit } from '@angular/core';
import { IDate } from '../db/models/idate';
import { HttpRequestService } from '../services/http-request.service';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data!: IDate;

  constructor(private translateConfigService: TranslateConfigService, private httpRequestService: HttpRequestService) { }

  ngOnInit() {
    this.httpRequestService.getData()
      .subscribe(data => this.data = data);

    // this.httpRequestService.getTickets('')
    //   .subscribe(data => {
    //   })

  }

}
