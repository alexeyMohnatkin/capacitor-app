import { IonText } from "@ionic/react";

type DateFormatOption = "short" | "long";

type Props = {
  date: string;
  format: DateFormatOption;
};

const dateOptions: Record<string, Intl.DateTimeFormatOptions> = {
  short: {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  },
  long: {
    dateStyle: "long",
  },
};

const isValidDate = (date: Date | string) =>
  date instanceof Date
    ? !isNaN(date.getTime())
    : !isNaN(new Date(date).getTime());

const DateFormat: React.FC<Props> = ({ date, format }) => {
  const d = new Date(date);
  if (!isValidDate(d)) {
    console.error("DateFormat: Invalid date!");
    return null;
  }

  const formattedDate = new Intl.DateTimeFormat(
    "en-US",
    dateOptions[format]
  ).format(d);
  return (
    <IonText>
      <time dateTime={formattedDate}>{formattedDate}</time>
    </IonText>
  );
};

export default DateFormat;
