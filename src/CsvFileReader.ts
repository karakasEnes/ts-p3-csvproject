import fs from 'fs';
import { MatchResults } from './MatchResult';
import { stringDateToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResults, string];

export abstract class CsvFileReader {
  data: MatchData[] = [];

  abstract mapRow(row: string[]): MatchData;

  constructor(public filename: string) {}

  read(): void {
    const mathes = fs.readFileSync(this.filename, { encoding: 'utf-8' });

    const dataMathes = mathes
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);

    this.data = dataMathes;
  }
}
