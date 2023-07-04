import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

const About: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>IonicFlin_about</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Sobre nosotros</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Esta es una aplicación de películas desarrollada con Ionic y React.
          ¡Disfruta explorando nuestras películas!
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default About;
