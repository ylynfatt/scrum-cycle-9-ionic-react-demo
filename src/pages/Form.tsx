import { IonLabel, IonDatetime, IonItem, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents, saveEvents } from "../services/EventsService";

const Form: React.FC = () => {
    const [text, setText] = useState<string>();
    const [eventDate, setEventDate] = useState<string>('2021-08-12');

    const handleSubmit = (e: any) => {
        console.log('Button clicked');
        // send off an API request
        saveEvents();
    };

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Form Example</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <p>The text in the input field is: <strong>{ text }</strong> and the date selected is <strong>{eventDate}</strong>.</p>
          <IonItem>
            <IonLabel>Enter Text</IonLabel>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Date: MM DD YY</IonLabel>
            <IonDatetime displayFormat="DDDD MMM D, YYYY" placeholder="Select Date" value={eventDate} onIonChange={e => setEventDate(e.detail.value!)}></IonDatetime>
        </IonItem>
          <IonButton color="primary" onClick={ (e) => handleSubmit(e) }>Submit</IonButton>

          <p>Back to <Link to="/home">Home</Link></p>
        </IonContent>
      </IonPage>
    );
};

export default Form;