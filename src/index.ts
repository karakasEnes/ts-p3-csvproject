import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResult';

// const reader = new CsvFileReader('football.csv');
// const reader = new MatchReader('football.csv');
// reader.read();

//alternate refactor 2 usage:

const newCsvFile = new CsvFileReader('football.csv');

const matchReader = new MatchReader(newCsvFile);
matchReader.load();
// information that we can anlysis things.

//

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  }

  if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log('Man United won: ', manUnitedWins);
