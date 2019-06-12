import { format } from 'date-fns';

export const sortByTimestamp = messages => {
  messages.sort(
    (a, b) => new Date(a.unixTime * 1000) - new Date(b.unixTime * 1000)
  );
  return messages;
};

export const getDateFromUnixTime = unixTime => {
  const date = new Date(unixTime * 1000);
  return format(date, 'MM/DD/YYYY');
};

export const getTimeFromUnixTime = unixTime => {
  const date = new Date(unixTime * 1000);
  return format(date, 'hh:mm A');
};
