import React, { Component } from 'react';
import NewReleaseDetailsComponent from './NewReleaseDetailsComponent';

export default class NewReleasesComponent extends Component {
  state = {
    showed: false,
  };

  toggleDetails = async () => {
    let isShowed = this.state.showed;
    this.setState({ showed: !isShowed });
  };

  render() {
    if (!this.state.showed) {
      return (
        <div>
          <h3>{this.props.name}</h3>
          <img src={this.props.image} alt="" />
          <p className="clickForDetails" onClick={this.toggleDetails}>
            Click for details
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <NewReleaseDetailsComponent
            release_date={this.props.release_date}
            total_tracks={this.props.total_tracks}
            type={this.props.type}
            url={this.props.url}
          />

          <p className="clickForDetails" onClick={this.toggleDetails}>
            Go back
          </p>
        </div>
      );
    }
  }
}
