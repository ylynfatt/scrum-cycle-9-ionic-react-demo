import { useIonViewWillEnter, IonRow, IonCol, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Here we create a Typescript Interface
interface Article {
  urlToImage: string;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
}

const ApiRequestDemo: React.FC = () => {
  const [news, setNews] = useState([]);
  const apiKey = 'abc123'; // Sign up on newsapi.org to get an API Key for this example

  useIonViewWillEnter(() => {
    // console.log('ionViewDidEnter event fired');
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://newsapi.org/v2/top-headlines?country=us", {
        headers: {
          "Authorization": `Bearer ${apiKey}`
        }
      });
      const data = await response.json();
      console.log(data);
      // store the data into our news state variable
      setNews(data.articles);
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonTitle>News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonRow>
        { news.map((article: Article, index) => (
          <IonCol size="4" key={ index }>
            <IonCard>
              <img src={ article.urlToImage } alt="Nicole Wolf" />
              <IonCardHeader>
                <IonCardSubtitle>{ article.publishedAt }</IonCardSubtitle>
                <IonCardTitle>{ article.title }</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                { article.description }
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
        </IonRow>
        
        <p>Back to <Link to="/home">Home</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default ApiRequestDemo;