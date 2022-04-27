
export interface ILeaderboard {
  myDates: ILeaders[];
  days: ILeaders[];
  currentDate: ILeaders[];
  second: ILeaders[];
}

export interface ILeaders {
  name: string;
  point: number;
  time: string;
  prize: string;
  extra: string;
}

