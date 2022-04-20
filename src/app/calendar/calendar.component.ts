import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IDate } from 'src/app/db/models/idate';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{
  days!: Observable<IDate[]>;
  data!: IDate;


  currentDate = JSON.stringify(new Date());
  sliderCount = Number(this.currentDate.slice(9, 11)) + 4;

  //firstPos = 7;
  sliderPos = - (Number(this.currentDate.slice(9, 11))  - 5) * 80;


  constructor(private translateConfigService: TranslateConfigService, private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.httpRequestService.getData()
      .subscribe(data => this.data = data);

      this.httpRequestService.getData()
      .subscribe(
        data => console.log(data.currentDate)
      );

      this.httpRequestService.getData()
      .subscribe(
        data => console.log(this.data.days[0].date.slice(8, 10))
      );
  }



  slideLeft() {
    if(this.sliderCount > 9) {
      this.sliderCount -= 1;
      console.log(this.sliderCount)
      this.sliderPos += 80;
    } else {
      this.sliderPos = -(Number(this.currentDate.slice(9, 11))  - 5) * 80;
      this.sliderCount = Number(this.currentDate.slice(9, 11)) + 4;
    }
  }

  slideRight() {
    let slider = document.querySelectorAll(".item")[0].clientWidth;
      console.log(slider)

    if(this.data.days.length > this.sliderCount) {
      this.sliderCount += 1;
      console.log(this.sliderCount)
      console.log(this.data.days.length)
      this.sliderPos -= (slider + 22);


    } else {
      this.sliderPos = 0;
      this.sliderCount = 5;
    }


    //console.log(this.data.days.length);
    //console.log(this.sliderCount)
    // console.log(document.querySelector('.calendar__container')?.firstChild?.firstChild?.childNodes[1].textContent);
    //console.log(this.data.currentDate.slice(8, 10))
   //console.log(today.parse());
   //console.log(this.currentDate)
   //console.log(Number(this.currentDate.slice(9, 11)))
   //console.log(this.firstPos)

  }




}
