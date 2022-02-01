export const stringDateToDate = (stringData: string): Date => {
  const dateParts = stringData.split('/').map((str: string) => parseInt(str)); // result ['28', '10', '2018']

  const newDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

  return newDate;
};
