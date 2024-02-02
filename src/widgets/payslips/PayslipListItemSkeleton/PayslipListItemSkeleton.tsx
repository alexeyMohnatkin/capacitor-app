import { IonItem, IonLabel, IonNote, IonSkeletonText } from "@ionic/react";

const PayslipListItemSkeleton: React.FC = () => {
  return (
    <IonItem detail>
      <IonLabel>
        <IonSkeletonText animated={true} style={{ width: 60 }} />
      </IonLabel>
      <IonNote color="medium" slot="end" style={{ width: 120 }}>
        <IonSkeletonText animated={true} style={{ width: 100 }} />
      </IonNote>
    </IonItem>
  );
};

export default PayslipListItemSkeleton;
