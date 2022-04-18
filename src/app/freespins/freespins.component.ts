import { Component, OnInit } from '@angular/core';
import { IDate } from 'src/app/db/models/idate';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-freespins',
  templateUrl: './freespins.component.html',
  styleUrls: ['./freespins.component.scss']
})
export class FreespinsComponent implements OnInit {
  

  data!: IDate;
  constructor(private translateConfigService: TranslateConfigService, private httpRequestService: HttpRequestService) { }

  changeDefaultLanguage(langType: string){
    this.translateConfigService.changeLanguage(langType);
    }

  ngOnInit(): void {
    this.httpRequestService.getData()
      .subscribe(data => this.data = data);
  }

}
