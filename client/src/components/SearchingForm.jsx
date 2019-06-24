import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SearchingForm(props) {
  return (
    <div>
      <Form onSubmit={props.searchForAlbums}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="What you need..."
            onChange={props.onChange}
            value={props.value}
            style={{ margin: '20px auto', width: '30%', padding: '20px' }}
          />
          <Button variant="primary" type="submit" value="Submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
