export const formatDate = (dateData: string | Date) => {
  const date = new Date(dateData);

  const formatted = `${date.getFullYear()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}`;

  return formatted;
};

export const toMySQLDatetime = (dateObj: Date, timeStr: string) => {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(dateObj.getDate()).padStart(2, '0');
  const datetime = `${year}-${month}-${day} ${timeStr}:00`;
  return datetime;
}