import React from 'react';
import Button from 'react-bootstrap/Button';

export default function NewReleaseDetailsComponent(props) {
  return (
    <div>
      <p>Release date: {props.release_date}</p>
      <p>Total tracks: {props.total_tracks}</p>
      <p>Type: {props.type}</p>

      <form action={props.url}>
        {' '}
        <Button type="submit" formTarget="_blank">
          Check on Spotify
        </Button>
      </form>
    </div>
  );
}
