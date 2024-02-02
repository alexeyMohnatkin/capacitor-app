import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
  useIonLoading,
} from "@ionic/react";
import PayslipList from "../../widgets/payslips/PayslipList";
import PayslipListItem from "../../widgets/payslips/PayslipListItem";
import usePayslips from "../../features/payslips/usePayslips";
import { useEffect } from "react";
import PayslipListItemSkeleton from "../../widgets/payslips/PayslipListItemSkeleton";

const PayslipListPage: React.FC = () => {
  const { payslips, isLoading, loadPayslips } = usePayslips();
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    loadPayslips();
  }, [loadPayslips]);

  useEffect(() => {
    if (isLoading) {
      present();
    } else {
      dismiss();
    }
  }, [isLoading, present, dismiss]);

  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    loadPayslips();
    event.detail.complete();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Capacitor App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <PayslipList>
          {!!isLoading &&
            new Array(10)
              .fill(0)
              .map((_, i) => <PayslipListItemSkeleton key={i} />)}
          {!isLoading &&
            payslips.map((payslip) => (
              <PayslipListItem
                key={payslip.id}
                payslip={payslip}
              ></PayslipListItem>
            ))}
        </PayslipList>
      </IonContent>
    </IonPage>
  );
};

export default PayslipListPage;
