import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProfileComponent(props) {
  return (
    <Card
      style={{
        width: '30%',
        margin: '20px auto',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Card.Img src={props.images} alt="profile" />
      <Card.Title>{props.display_name}</Card.Title>
      <p>Country: {props.country}</p>

      <p>Email: {props.email}</p>
      <p>ID: {props.id}</p>
      <p>Product: {props.product}</p>

      <form action={props.href}>
        {' '}
        <Button type="submit" formTarget="_blank">
          Check profile
        </Button>
      </form>
    </Card>
  );
}
