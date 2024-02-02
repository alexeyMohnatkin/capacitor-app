import { IonItem, IonLabel, IonNote } from "@ionic/react";
import DateFormat from "../../../UI/DateFormat";

type Props = {
  payslip: {
    id: string;
    fromDate: string;
    toDate: string;
  };
};

const PayslipListItem: React.FC<Props> = ({ payslip }) => {
  return (
    <IonItem
      routerLink={`/payslips/${payslip.id}`}
      routerDirection="forward"
      detail
    >
      <IonLabel>#{payslip.id}</IonLabel>
      <IonNote color="medium" slot="end">
        <DateFormat date={payslip.fromDate} format="short" /> -{" "}
        <DateFormat date={payslip.toDate} format="short" />
      </IonNote>
    </IonItem>
  );
};

export default PayslipListItem;
