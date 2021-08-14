import { IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../images/nicole-wolf.jpg';

const About: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <img src={ profilePhoto } alt="Nicole Wolf" />
          <IonCardHeader>
            <IonCardSubtitle>Web Developer</IonCardSubtitle>
            <IonCardTitle>Nicole Wolf</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus dolore atque harum neque facilis aperiam consequuntur a modi consectetur necessitatibus optio, expedita, magnam ab molestiae, veniam iure rem quos omnis.
          </IonCardContent>
        </IonCard>

        <p>Back to <Link to="/home">Home</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default About;