import {months} from "./constans";

const getFormatDate = (date) => {
  const month = months[date.getMonth()];
  const day = date.getDate();

  console.log(date);
  console.log(date.getMonth());

  return `${day} ${month}`;
};

const getFormatTime = (date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${hour}:${minute}`
}

export {getFormatDate, getFormatTime};
