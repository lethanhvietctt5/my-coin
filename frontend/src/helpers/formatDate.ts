import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const formatDate = (date: string | number) => {
  const yesterday = dayjs(Date.now()).subtract(1, "day");

  const time = dayjs(date);
  if (time.isAfter(yesterday)) {
    return dayjs().to(date);
  }

  return time.format("DD/MM/YYYY, HH:mm");
};

export default formatDate;
