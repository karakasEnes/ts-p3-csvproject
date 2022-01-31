import fs from 'fs';

const mathes = fs.readFileSync('football.csv', { encoding: 'utf-8' });

const dataMathes = mathes
  .split('\n')
  .map((row: string): string[] => row.split(','));

const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';

let manUnitedWins = 0;

for (let match of dataMathes) {
  if (match[1] === 'Man United' && match[5] === homeWin) {
    manUnitedWins++;
  }

  if (match[2] === 'Man United' && match[5] === awayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
