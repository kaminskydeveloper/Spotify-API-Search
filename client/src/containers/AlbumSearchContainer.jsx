import React, { Component } from 'react';
import AlbumComponent from '../components/AlbumComponent';
import querystring from 'query-string';
import SearchingForm from '../components/SearchingForm';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from 'react-redux';

const parsedAccessToken = querystring.parse(window.location.search);
const accessToken = parsedAccessToken.access_token;

class AlbumSearchContainer extends Component {
  state = {
    albumInput: '',
  };

  searchForAlbums = async event => {
    event.preventDefault();

    const albumName = this.state.albumInput;

    const api_call = await fetch(
      `https://api.spotify.com/v1/search?q=album%3A${albumName}&type=album`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const data = await api_call.json();

    this.props.fetchAlbums(data.albums.items);
    this.setState({ albumInput: '' });
  };

  handleChange = event => {
    this.setState({ albumInput: event.target.value });
  };

  render() {
    let albumsList = [];

    if (this.props.albums.length > 0) {
      albumsList = this.props.albums.map(element => (
        <AlbumComponent
          key={element.id}
          name={element.name}
          image={element.images[1].url}
          artist={element.artists[0].name}
          release_date={element.release_date}
          total_tracks={element.total_tracks}
          id={element.id}
          href={element.href}
        />
      ));
    }

    return (
      <div className="App">
        <Jumbotron style={{ backgroundColor: '#1ED760' }}>
          <h1>Search using Album Name</h1>
          <SearchingForm
            searchForAlbums={this.searchForAlbums}
            onChange={this.handleChange}
            value={this.state.albumInput}
          />
        </Jumbotron>
        <div className="display-grid"> {albumsList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapActionsToProps = dispatch => {
  return {
    fetchAlbums: albums => dispatch({ type: 'FETCH_ALBUMS', payload: albums }),
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AlbumSearchContainer);
