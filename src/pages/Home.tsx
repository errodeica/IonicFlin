import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Link } from 'react-router-dom';
import moviesData from '../movies.json';

import './Movie.css'; // Importar archivo CSS para estilos personalizados

const Home: React.FC = () => {
  const displayedMovies = moviesData.slice(0, 5); // Obtener solo las primeras cinco películas

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonicFlin</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="movie-list">
          {displayedMovies.map((movie) => (
            <IonCard key={movie.id} className="movie-card">
              <Link to={`/movie/${movie.id}`}>
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                  }}
                  className="movie-image"
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
                </IonCardContent>
              </Link>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
