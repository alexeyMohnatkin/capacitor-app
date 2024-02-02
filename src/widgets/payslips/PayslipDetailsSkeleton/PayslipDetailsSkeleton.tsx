import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSkeletonText,
} from "@ionic/react";

const PayslipDetailsSkeleton: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          <IonSkeletonText animated={true} style={{ width: 120 }} />
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonSkeletonText animated={true} style={{ width: 120 }} />
      </IonCardContent>
      <IonCardContent>
        <IonSkeletonText animated={true} style={{ width: "100%" }} />
      </IonCardContent>
    </IonCard>
  );
};

export default PayslipDetailsSkeleton;
