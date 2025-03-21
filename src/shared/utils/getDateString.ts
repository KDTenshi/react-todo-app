export const getDateString = (timestamp: number) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };

  const date = new Date(timestamp);

  return date.toLocaleString("en-GB", options);
};
