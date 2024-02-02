import { RouteComponentProps } from "react-router-dom";
import PayslipDetails from "../../widgets/payslips/PayslipDetails";
import usePayslip from "../../features/payslips/usePayslip";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonViewDidEnter,
} from "@ionic/react";
import { useEffect } from "react";
import PayslipDetailsSkeleton from "../../widgets/payslips/PayslipDetailsSkeleton";

type Props = RouteComponentProps<{ id: string }>;

const PayslipDetailPage: React.FC<Props> = ({ match }) => {
  const { id } = match.params;
  const { payslip, loadPayslip, isLoading } = usePayslip();
  const [present, dismiss] = useIonLoading();

  useIonViewDidEnter(() => {
    loadPayslip(id);
  });

  useEffect(() => {
    if (isLoading) {
      present();
    } else {
      dismiss();
    }
  }, [isLoading, present, dismiss]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Payslip</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!!payslip && !isLoading && <PayslipDetails payslip={payslip} />}
        {!!isLoading && <PayslipDetailsSkeleton />}
      </IonContent>
    </IonPage>
  );
};

export default PayslipDetailPage;
