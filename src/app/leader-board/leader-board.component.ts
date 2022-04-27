import { Component, OnInit } from '@angular/core';
import { IDate } from 'src/app/db/models/idate';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { ILeaderboard } from '../db/models/ileaderboard';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  data!: IDate;

  leaders!: ILeaderboard;

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {

    this.httpRequestService.getLeaderboard()
      .subscribe(leaders => this.leaders = leaders);

    this.httpRequestService.getLeaderboard()
    .subscribe(
      leaders => console.log(leaders)
    );
  }

}
