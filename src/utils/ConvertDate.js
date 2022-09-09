const convertLocalDateToDate = (date) => {
  date = date.split('/');
  date = new Date(date[2], date[1] - 1, date[0]);
  return date;
}

const convertISODateToDate = (date) => {
  date = date.split('-');
  date = new Date(date[0], date[1] - 1, date[2]);
  return date;
}

export { convertLocalDateToDate, convertISODateToDate };