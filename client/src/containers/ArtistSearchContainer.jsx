import React, { Component } from 'react';
import SearchingForm from '../components/SearchingForm';
import Jumbotron from 'react-bootstrap/Jumbotron';
import querystring from 'query-string';
import ArtistComponent from '../components/ArtistComponent';
import { connect } from 'react-redux';

const parsedAccessToken = querystring.parse(window.location.search);
const accessToken = parsedAccessToken.access_token;

class Artist extends Component {
  state = {
    artistInput: '',
  };

  searchForArtists = async event => {
    event.preventDefault();

    const artistName = this.state.artistInput;

    const api_call = await fetch(
      `https://api.spotify.com/v1/search?q=artist%3A${artistName}&type=artist`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const data = await api_call.json();
    // this.setState({ artists: data.artists.items, artistInput: '' });
    // console.log(this.state.artists);

    //console.log(data.artists.items);
    this.props.fetchArtists(data.artists.items);
    this.setState({ artistInput: '' });
    //console.log(this.props.artists);
    console.log('this.props.artists', this.props.artists);
    console.log(data.artists.items);
  };

  handleChange = event => {
    this.setState({ artistInput: event.target.value });
  };

  render() {
    let artistList = [];

    if (this.props.artists.length > 0) {
      artistList = this.props.artists.map(element => {
        if (element.images[0] && element.genres) {
          return (
            <ArtistComponent
              key={element.id}
              name={element.name}
              image={element.images[0]['url']}
              popularity={element.popularity}
              genres={element.genres}
              followers={element.followers.total}
              linkToSpotify={element.external_urls.spotify}
            />
          );
        } else {
          return (
            <ArtistComponent
              key={element.id}
              name={element.name}
              popularity={element.popularity}
              followers={element.followers.total}
              linkToSpotify={element.external_urls.spotify}
            />
          );
        }
      });
    }

    return (
      <div className="App">
        <Jumbotron style={{ backgroundColor: '#1ED760' }}>
          <h1>Search using Artist Name</h1>
          <SearchingForm
            searchForAlbums={this.searchForArtists}
            onChange={this.handleChange}
            value={this.state.artistInput}
          />
        </Jumbotron>
        <div className="display-grid"> {artistList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artists: state.artists,
});

const mapActionsToProps = dispatch => ({
  fetchArtists(artists) {
    dispatch({ type: 'FETCH_ARTISTS', payload: artists });
  },
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Artist);
