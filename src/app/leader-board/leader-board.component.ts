import { Component, OnInit } from '@angular/core';
import {  IDay } from 'src/app/db/models/idate';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { ILeaderboard } from '../db/models/ileaderboard';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  data!: IDay;
  item = 'second';

  // arr = [{
  //   id:"1",
  //   price:"130000.0",
  //   user:55,
  //  },
  //  {
  //    id:"2",
  //    price:"140000.0",
  //   user:55,
  //  }]



  leaders!: ILeaderboard;

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {

    this.httpRequestService.getLeaderboard()
      .subscribe(leaders => this.leaders = leaders);

    this.httpRequestService.getLeaderboard()
    .subscribe(
      leaders => console.log( leaders)
    );
  }

  myArray() {
    //console.log(this.arr[0].price)
  }

}
