import { Component, Input, OnInit } from '@angular/core';
import { IDay } from '../db/models/idate';

@Component({
  selector: 'app-calendar-content',
  templateUrl: './calendar-content.component.html',
  styleUrls: ['./calendar-content.component.scss']
})
export class CalendarContentComponent implements OnInit {

  @Input() currentDate!: string;
  @Input() day!: IDay;
  @Input() newItemValue!: string;

  constructor() { }

  ngOnInit(): void {

  }

}
