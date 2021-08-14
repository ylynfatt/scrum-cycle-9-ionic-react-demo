import { IonGrid, IonRow, IonCol, IonSplitPane, IonMenu, IonMenuButton, IonList, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import React from 'react';

const MenuDemo: React.FC = () => {
  return (
    <IonContent>
      <IonSplitPane contentId="main">
        {/*--  the side menu  --*/}
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/home">Home</IonItem>
              <IonItem routerLink="/about">About</IonItem>
              <IonItem routerLink="/programmes">Programmes</IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        {/*-- the main content --*/}
        <IonPage id="main">
          <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                  <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Menu Demo</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>This Demo showcases the Split pane menu which could be useful for applications that are built for both desktop and mobile.</p>
            <IonGrid>
              <IonRow>
                <IonCol className="ion-hide-md-up">
                  <div>
                    <img src="assets/icon/icon.png" alt="Ionic Icon" width="200" />
                    <h3>hidden on small screens</h3>
                    You can only see me when you are viewing on a larger screen.
                  </div>
                </IonCol>
                <IonCol>
                  <div>
                    <h3>not-hidden</h3>
                    You can see me!
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    </IonContent>
  );
};

export default MenuDemo;