import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function HomeContainer() {
  return (
    <div>
      <Jumbotron>
        <h1>Project zaliczeniowy z Reacta.</h1>
        <p>
          Aplikacja internetowa, korzystająca ze Spotify API. Możliwe jest
          wyszukiwanie informacji z bazy danych Spotify za pomocą autoryzacji
          OAuth. Konieczne jest zalogowanie się na osobiste konto Spotify w celu
          pobrania tokenu.
        </p>

        <p>
          Projekt wykonali: Kamiński Damian, Tomasz Lis oraz Piotr Hejmanowski.
        </p>
      </Jumbotron>
    </div>
  );
}
