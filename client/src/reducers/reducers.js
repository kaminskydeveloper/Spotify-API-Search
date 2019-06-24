import { combineReducers } from 'redux';

export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const SORT_ALBUMS_ALPHA = 'SORT_ALBUMS_ALPHA';
export const SHOW_PROFILE = 'SHOW_PROFILE';

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
    case SORT_ALBUMS_ALPHA:
      let newAlbums = action.payload.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      return { ...state, albums: newAlbums };

    default:
      return state;
  }
};

const profile = (state = { profile: {} }, action) => {
  switch (action.type) {
    case SHOW_PROFILE:
      return action.payload;
    // return { ...state, artists: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ artists, albums, profile });
