import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IDate } from 'src/app/db/models/idate';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { ILeaderboard } from '../db/models/ileaderboard';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-small-calendar',
  templateUrl: './small-calendar.component.html',
  styleUrls: ['./small-calendar.component.scss']
})
export class SmallCalendarComponent implements OnInit{
  data!: IDate;
  days!: Observable<IDate[]>;


  leaders!: ILeaderboard;
  person!: Observable<ILeaderboard[]>;



  currentDate = JSON.stringify(new Date());
  sliderCount = Number(this.currentDate.slice(9, 11));

  sliderPos = - (Number(this.currentDate.slice(9, 11)) - 1) * 80;

  newItemValue = '';



  constructor(private translateConfigService: TranslateConfigService, private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.httpRequestService.getData()
      .subscribe(data => this.data = data);

      this.httpRequestService.getData()
      .subscribe(
       // data => console.log(data.currentDate)
      );

      this.httpRequestService.getData()
      .subscribe(
       // data => console.log(  this.data.days[19].date.slice(8, 10))
      );

      this.httpRequestService.getLeaderboard()
      .subscribe(
       // data => console.log(this.data)
      );
  }



  slideLeft() {
    if(this.sliderCount > 1) {
      this.sliderCount -= 1;
      //console.log(this.sliderCount)
      this.sliderPos += 80;
    }
    //  else {
    //   this.sliderPos = -(Number(this.currentDate.slice(9, 11))  - 5) * 80;
    //   this.sliderCount = Number(this.currentDate.slice(9, 11)) + 4;
    // }
  }

  slideRight() {

    if(this.data.days.length > this.sliderCount) {
      this.sliderCount += 1;
      // console.log(this.sliderCount)
      // console.log(this.data.days.length)
      this.sliderPos -= 80;


    }
    // else {
    //   this.sliderPos = 0;
    //   this.sliderCount = 5;
    // }

  }

  goCenter(event: any) {
    let itemValue = Number(event.path[0].childNodes[1].innerText)
    this.sliderCount = itemValue;
    if(this.data.days.length > this.sliderCount && this.sliderCount >= 1) {
      this.sliderPos = - (itemValue - 1) * 80;
    }
    this.newItemValue =  JSON.stringify(itemValue);
    //console.log( typeof(this.newItemValue))
  }
}
