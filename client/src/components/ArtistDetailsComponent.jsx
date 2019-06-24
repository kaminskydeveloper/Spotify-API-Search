import React from 'react';

export default function ArtistDetailsComponent(props) {
  let genres = [];
  if (props.genres) {
    genres = props.genres.map((genre, index) => {
      return <span key={index}>{genre} </span>;
    });
  }
  return (
    <div>
      <h3>Popularity: {props.popularity}</h3>
      <div>
        <b>Genres: </b>
        {genres}
      </div>
      <p>
        <b>Followers: </b>
        {props.followers}
      </p>
      <p>
        <a href={props.linkToSpotify} target="_blank" rel="noopener noreferrer">
          Check on Spotify
        </a>
      </p>
    </div>
  );
}
