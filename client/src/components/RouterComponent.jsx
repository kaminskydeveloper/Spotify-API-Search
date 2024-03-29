import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Artist from '../containers/ArtistSearchContainer';
import AlbumSearchContainer from '../containers/AlbumSearchContainer';
import HomeComponent from './HomeComponent';
import ProfileContainer from '../containers/ProfileContainer';
import NewReleasesContainer from '../containers/NewReleasesContainer';
import OtherUserProfileContainer from '../containers/OtherUserProfileContainer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function RouterComponent() {
  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Spotify API Search</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navi">
              <Link to="/">Home</Link>
              <Link to="/album">Album</Link>
              <Link to="/artist">Artist</Link>
              <Link to="/newreleases">New</Link>
              <Link to="/otheruser">FindUser</Link>
              <Link to="/profile">Profile</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact component={HomeComponent} />
        <Route path="/album" component={AlbumSearchContainer} />
        <Route path="/artist" component={Artist} />
        <Route path="/newreleases" component={NewReleasesContainer} />
        <Route path="/otheruser" component={OtherUserProfileContainer} />
        <Route path="/profile" component={ProfileContainer} />
      </Router>
    </div>
  );
}
