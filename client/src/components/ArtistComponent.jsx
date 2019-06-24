import React, { Component } from 'react';
import ArtistDetailsComponent from './ArtistDetailsComponent';

export default class ArtistComponent extends Component {
  state = {
    showed: false,
    details: [],
  };

  toggleDetails = async () => {
    let isShowed = this.state.showed;
    this.setState({ showed: !isShowed });
  };

  render() {
    if (!this.state.showed) {
      return (
        <div>
          <div>
            <h3>{this.props.name}</h3>
            <img src={this.props.image} alt="" style={{ height: '300px' }} />

            <p className="clickForDetails" onClick={this.toggleDetails}>
              Click for details
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <ArtistDetailsComponent
            popularity={this.props.popularity}
            genres={this.props.genres}
            followers={this.props.followers}
            linkToSpotify={this.props.linkToSpotify}
          />
          <p className="clickForDetails" onClick={this.toggleDetails}>
            Go Back
          </p>
        </div>
      );
    }
  }
}
