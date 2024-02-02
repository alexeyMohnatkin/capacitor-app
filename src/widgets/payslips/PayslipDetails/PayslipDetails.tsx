import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import { download } from "ionicons/icons";
import DateFormat from "../../../UI/DateFormat";
import downloadFile from "../../../utils/downloadFile";

type Props = {
  payslip: {
    id: string;
    fromDate: string;
    toDate: string;
    file: string;
  };
};

const PayslipDetails: React.FC<Props> = ({ payslip }) => {
  const handleDownload = () => {
    downloadFile(payslip.file, `payslip-${payslip.id}.pdf`);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Payslip #{payslip.id}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <DateFormat date={payslip.fromDate} format="long" /> -{" "}
        <DateFormat date={payslip.toDate} format="long" />
      </IonCardContent>
      <IonCardContent>
        <IonButton expand="full" color="primary" onClick={handleDownload}>
          <IonIcon slot="start" icon={download}></IonIcon>
          Download
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default PayslipDetails;
