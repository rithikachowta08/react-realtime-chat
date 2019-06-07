import { fromUnixTime, format } from 'date-fns';

export const sortByTimestamp = messages => {
  messages.sort(
    (a, b) => new Date(a.unixTime * 1000) - new Date(b.unixTime * 1000)
  );
  return messages;
};

export const getDateFromUnixTime = unixTime => {
  const result = fromUnixTime(unixTime);
  console.log(new Date(result));
  return format(new Date(result), 'MM/DD/YYYY');
};

export const getTimeFromUnixTime = unixTime =>
  format.unix(unixTime).format('hh:mm A');
