import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IDate } from 'src/app/db/models/idate';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { ILeaderboard } from '../../db/models/ileaderboard';
import { TranslateConfigService } from '../../services/translate-config.service';
import { ICalendarsConfig } from '.././abstract/icards.config';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{
  @Input() public config: ICalendarsConfig = { size: 'normal' };
  data!: IDate;
  //days!: Observable<IDate[]>;


  leaders!: ILeaderboard;
  //person!: Observable<ILeaderboard[]>;
  leaderDates!: IDate;



  currentDate = JSON.stringify(new Date());
  sliderCount = Number(this.currentDate.slice(9, 11)) + 4;

  sliderPos = - (Number(this.currentDate.slice(9, 11))  - 5) * 80;
  smallSliderPos = - (Number(this.currentDate.slice(9, 11)) + 5) * 80;

  newItemValue = '';



  constructor(private translateConfigService: TranslateConfigService, private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.httpRequestService.getData()
      .subscribe(data => this.data = data);

      this.httpRequestService.getData()
      .subscribe(
        data => console.log(data.currentDate)
      );

      // this.httpRequestService.getData()
      // .subscribe(
      //   data => console.log(  data.days[0])
      // );

  }



  slideLeft() {
    if(this.config.size !== 'small') {
      if(this.sliderCount > 9) {
        this.sliderCount -= 1;
        //console.log(this.sliderCount)
        this.sliderPos += 80;
      } else {
        this.sliderPos = -(Number(this.currentDate.slice(9, 11))  - 5) * 80;
        this.sliderCount = Number(this.currentDate.slice(9, 11)) + 4;
      }
    }
    else if(this.config.size === 'small') {
      if(this.sliderCount > 5) {
        console.log(this.sliderCount)
        this.sliderCount -= 1;
        this.smallSliderPos += 100;
      }


    }
  }

  slideRight() {
    if(this.config.size !== 'small') {
      if(this.data.days.length > this.sliderCount) {
        this.sliderCount += 1;
        //console.log(this.sliderCount)
        //console.log(this.data.days.length)
        this.sliderPos -= 80;


      } else {
        this.sliderPos = 0;
        this.sliderCount = 5;
      }
    }

    else if(this.config.size === 'small') {
      console.log(this.sliderCount)
      if(this.data.days.length > this.sliderCount - 4) {
        this.sliderCount += 1;
        // console.log(this.sliderCount)
        // console.log(this.data.days.length)
        this.smallSliderPos -= 100;


      }
    }

  }

  goCenter(event: any) {
    if(this.config.size !== 'small') {
      let itemValue = Number(event.path[0].childNodes[1].innerText)
      this.sliderCount = itemValue + 4;
      if(this.data.days.length > this.sliderCount && this.sliderCount >= 9) {
        this.sliderPos = - (itemValue - 5) * 80;
      }
      this.newItemValue =  JSON.stringify(itemValue);
     // console.log( typeof(this.newItemValue))
    }

    else if(this.config.size === 'small') {
      console.log(this)

    }



  }
}
