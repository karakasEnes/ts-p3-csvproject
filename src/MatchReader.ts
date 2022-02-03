import fs from 'fs';
import { MatchResults } from './MatchResult';
import { stringDateToDate } from './utils';
type MatchData = [Date, string, string, number, number, MatchResults, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.mapRow);
  }

  mapRow(row: string[]): MatchData {
    return [
      stringDateToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}

// import { CsvFileReader } from './CsvFileReader';
// import { MatchResults } from './MatchResult';
// import { stringDateToDate } from './utils';

// type MatchData = [Date, string, string, number, number, MatchResults, string];
// export class MatchReader  {
//   mapRow(row: string[]): MatchData {
//     return [
//       stringDateToDate(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3]),
//       parseInt(row[4]),
//       row[5] as MatchResults,
//       row[6],
//     ];
//   }
// }
