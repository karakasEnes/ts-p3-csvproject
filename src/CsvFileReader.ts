import fs from 'fs';
import { MatchResults } from './MatchResult';
import { stringDateToDate } from './utils';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    const mathes = fs.readFileSync(this.filename, { encoding: 'utf-8' });

    const dataMathes = mathes
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): any => [
        stringDateToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResults,
        row[6],
      ]);

    this.data = dataMathes;
  }
}
