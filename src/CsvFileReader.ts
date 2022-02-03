import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    const mathes = fs.readFileSync(this.filename, { encoding: 'utf-8' });

    const dataMathes = mathes
      .split('\n')
      .map((row: string): string[] => row.split(','));

    this.data = dataMathes;
  }
}
