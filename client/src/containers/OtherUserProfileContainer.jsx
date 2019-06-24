import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import querystring from 'query-string';
import { connect } from 'react-redux';

const parsedAccessToken = querystring.parse(window.location.search);
const accessToken = parsedAccessToken.access_token;

class OtherUserProfileContainer extends Component {
  state = {
    usernameInput: '',
    error: {},
  };

  searchForUser = async event => {
    event.preventDefault();

    const usernameInput = this.state.usernameInput;

    const api_call = await fetch(
      `https://api.spotify.com/v1/users/${usernameInput}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const data = await api_call.json();

    console.log(data);

    if (data.error) {
      this.setState({ error: data.error });
      this.setState({ usernameInput: '' });
    } else {
      this.props.getOtherUser(data);
      this.setState({ usernameInput: '', error: {} });
    }

    console.log(this.state.error);
  };

  handleChange = event => {
    this.setState({ usernameInput: event.target.value });
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h3>other user profile</h3>
        </Jumbotron>

        <Form
          onSubmit={this.searchForUser}
          style={{ width: '30%', textAlign: 'center', margin: '0 auto' }}
        >
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={this.state.usernameInput}
              type="username"
              placeholder="Enter username"
            />
            <Form.Text className="text-muted">
              Here enter username that you're looking for.
            </Form.Text>
          </Form.Group>

          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
        <div>
          {this.props.otherUser.id ? (
            this.state.error.message ? (
              <Alert
                variant="danger"
                style={{ width: '50%', margin: '20px auto' }}
              >
                User doesn't exists!
              </Alert>
            ) : this.props.otherUser.images.length > 0 ? (
              <Card
                style={{
                  width: '30%',
                  margin: '20px auto',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <Card.Img
                  src={this.props.otherUser.images[0].url}
                  alt="profile"
                />
                <Card.Title>{this.props.otherUser.display_name}</Card.Title>
                <form action={this.props.otherUser.external_urls.spotify}>
                  {' '}
                  <Button type="submit" formTarget="_blank">
                    Check profile
                  </Button>
                </form>
              </Card>
            ) : (
              <Card
                style={{
                  width: '30%',
                  margin: '20px auto',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <Card.Title>{this.props.otherUser.display_name}</Card.Title>
                <p>No avatar</p>
                <form action={this.props.otherUser.external_urls.spotify}>
                  {' '}
                  <Button type="submit" formTarget="_blank">
                    Check profile
                  </Button>
                </form>
              </Card>
            )
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  otherUser: state.otherUser,
});

const mapActionsToProps = dispatch => ({
  getOtherUser(otherUser) {
    dispatch({ type: 'GET_OTHERUSER', payload: otherUser });
  },
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(OtherUserProfileContainer);
