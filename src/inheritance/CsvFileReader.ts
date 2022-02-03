// import fs from 'fs';
// import { MatchResults } from './MatchResult';
// import { stringDateToDate } from './utils';

// export abstract class CsvFileReader<T> {
//   data: T[] = [];

//   abstract mapRow(row: string[]): T;

//   constructor(public filename: string) {}

//   read(): void {
//     const mathes = fs.readFileSync(this.filename, { encoding: 'utf-8' });

//     const dataMathes = mathes
//       .split('\n')
//       .map((row: string): string[] => row.split(','))
//       .map(this.mapRow);

//     this.data = dataMathes;
//   }
// }
