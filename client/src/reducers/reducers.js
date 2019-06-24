import { combineReducers } from 'redux';

export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const SHOW_PROFILE = 'SHOW_PROFILE';
export const NEW_RELEASES = 'NEW_RELEASES';
export const GET_OTHERUSER = 'GET_OTHERUSER';

const initialState = {
  artists: [],
};

const artists = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTISTS:
      return action.payload;
    // return { ...state, artists: action.payload };
    default:
      return state;
  }
};

const albums = (state = { albums: [] }, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      // return { ...state, albums: action.payload };
      return action.payload;

    default:
      return state;
  }
};

const newReleases = (state = { newReleases: [] }, action) => {
  switch (action.type) {
    case NEW_RELEASES:
      return action.payload;
    //return { ...state, newAlbums: action.payload };
    default:
      return state;
  }
};

const otherUser = (state = { otherUser: {} }, action) => {
  switch (action.type) {
    case GET_OTHERUSER:
      return action.payload;
    //return { ...state, otherUser: action.payload };
    default:
      return state;
  }
};

const profile = (state = { profile: {} }, action) => {
  switch (action.type) {
    case SHOW_PROFILE:
      return action.payload;
    //return { ...state, artists: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  artists,
  albums,
  profile,
  newReleases,
  otherUser,
});
