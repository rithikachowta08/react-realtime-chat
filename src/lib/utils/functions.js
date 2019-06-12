import { format } from 'date-fns';

export const getDateFromUnixTime = unixTime => {
  const date = new Date(unixTime * 1000);
  return format(date, 'MM/DD/YYYY');
};

export const getTimeFromUnixTime = unixTime => {
  const date = new Date(unixTime * 1000);
  return format(date, 'hh:mm A');
};
