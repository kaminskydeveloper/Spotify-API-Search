import React, { Component } from 'react';
import querystring from 'query-string';
import NewReleaseComponent from '../components/NewReleasesComponent';
import { connect } from 'react-redux';

const parsedAccessToken = querystring.parse(window.location.search);
const accessToken = parsedAccessToken.access_token;

class NewReleasesContainer extends Component {
  state = {
    dataisLoaded: false,
  };

  componentDidMount() {
    fetch(`https://api.spotify.com/v1/browse/new-releases`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(res => res.json())
      .then(news => {
        // this.setState({ newAlbums: news.albums.items });
        // console.log(this.state.newAlbums);

        this.props.setNewReleases(news.albums.items);
        this.setState({ dataisLoaded: true });
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.props.newReleases);

    if (this.state.dataisLoaded) {
      const newAlbumsList = this.props.newReleases.map(album => (
        <NewReleaseComponent
          key={album.id}
          name={album.name}
          image={album.images[1].url}
          total_tracks={album.total_tracks}
          release_date={album.release_date}
          type={album.type}
          url={album.external_urls.spotify}
        />
      ));
      return <div className="display-grid">{newAlbumsList}</div>;
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapStateToProps = state => ({
  newReleases: state.newReleases,
});

const mapActionsToProps = dispatch => ({
  setNewReleases(newReleases) {
    dispatch({ type: 'NEW_RELEASES', payload: newReleases });
  },
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(NewReleasesContainer);
