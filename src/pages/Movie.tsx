import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useParams } from 'react-router-dom';
import moviesData from '../movies.json';
import './Movie.css';

const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = moviesData.find((movie) => movie.id === parseInt(id, 0));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nombre de la Película</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {movie && (
          <IonCard className="movie-card">
            <div
              className="movie-image"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
              }}
            ></div>
            <IonCardHeader className="movie-card-header">
              <IonCardSubtitle>{movie.genre}</IonCardSubtitle>
              <IonCardTitle>{movie.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p><strong>Duración:</strong> {movie.runtime} min</p>
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Fecha de Estreno:</strong> {movie.release_date}</p>
              <p><strong>Valoración:</strong> {movie.vote_average}/10</p>
              <p><strong>Descripción:</strong> {movie.overview}</p>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Movie;
