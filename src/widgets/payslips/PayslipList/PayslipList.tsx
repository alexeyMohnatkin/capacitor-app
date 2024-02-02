import { IonLabel, IonList, IonListHeader } from "@ionic/react";

type Props = React.PropsWithChildren;

const PayslipList: React.FC<Props> = ({ children }) => {
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>My payslips</IonLabel>
      </IonListHeader>
      {children}
    </IonList>
  );
};

export default PayslipList;
