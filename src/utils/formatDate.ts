export const formatDate = (dateData: string | Date) => {
  const date = new Date(dateData);

  const formatted = `${date.getFullYear()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}`;

  return formatted;
};
