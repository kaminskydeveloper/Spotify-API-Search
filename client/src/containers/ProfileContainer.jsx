import React, { Component } from 'react';
import querystring from 'query-string';
import ProfileComponent from '../components/ProfileComponent';
import { connect } from 'react-redux';

const parsedAccessToken = querystring.parse(window.location.search);
const accessToken = parsedAccessToken.access_token;

class ProfileContainer extends Component {
  state = {
    dataisLoaded: false,
  };

  componentDidMount() {
    fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(res => res.json())
      .then(profile => {
        //this.setState({ profile: profile });
        //console.log(this.state.profile.images[0].url);
        this.props.showProfile(profile);
        this.setState({ dataisLoaded: true });
      })
      .catch(error => console.log(error));
  }

  render() {
    const {
      country,
      display_name,
      email,
      external_urls,
      id,
      images,
      product,
    } = this.props.profile;

    console.log(this.props.profile);

    if (this.state.dataisLoaded && images.length > 0) {
      return (
        <div>
          <ProfileComponent
            country={country}
            display_name={display_name}
            email={email}
            href={external_urls.spotify}
            id={id}
            images={images[0].url}
            product={product}
          />
        </div>
      );
    } else if (this.state.dataisLoaded) {
      return (
        <div>
          <ProfileComponent
            country={country}
            display_name={display_name}
            email={email}
            href={external_urls.spotify}
            id={id}
            product={product}
          />
        </div>
      );
    }
    return <h1>Loading</h1>;
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapActionsToProps = dispatch => ({
  showProfile(profile) {
    dispatch({ type: 'SHOW_PROFILE', payload: profile });
  },
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProfileContainer);
