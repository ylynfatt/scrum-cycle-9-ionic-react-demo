import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Greeting from "../components/Greeting";
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Greeting name="Lauren" />
        <div className="button-group">
          <IonButton routerLink="/about" color="primary">About</IonButton>
          <IonButton routerLink="/programmes" color="primary">Programmes</IonButton>
          <IonButton routerLink="/menu-demo" color="success">Menu Demo</IonButton>
          <IonButton routerLink="/api-request" color="success">API Request</IonButton>
          <IonButton routerLink="/form" color="success">Form</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
