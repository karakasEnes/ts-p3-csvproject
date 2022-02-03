import fs from 'fs';
import { MatchResults } from './MatchResult';
import { stringDateToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    const mathes = fs.readFileSync(this.filename, { encoding: 'utf-8' });

    const dataMathes = mathes
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);

    this.data = dataMathes;
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
