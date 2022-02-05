import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResult';
import { ConsoleReports } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';

const newCsvFile = new CsvFileReader('football.csv');
const matchReader = new MatchReader(newCsvFile);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReports()
);

summary.buildAndPrintReport(matchReader.matches);
