import { IonItem, IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './programmes.scss';


const Programmes: React.FC = () => {

  const programmeDetails = [
      { id: 1, name: "BSc. General" },
      { id: 2, name: "BSc. Information Technology" },
      { id: 3, name: "BSc. Computer Studies Option" },
      { id: 4, name: "BSc. Software Engineering" },
  ];
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle>Programmes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList>
            { programmeDetails.map((programme) => (
            <IonItem key={programme.id}>
                <IonLabel>{ programme.name }</IonLabel>
            </IonItem>
            )) }
        </IonList>
        <p>Back to <Link to="/home">Home</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Programmes;