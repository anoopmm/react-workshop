// import axios from '../common/helpers/APIHelpers';
import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_ERROR,
} from '../constants/actions';

import page1 from '../jsonData/CONTENTLISTINGPAGE-PAGE1.json';
import page2 from '../jsonData/CONTENTLISTINGPAGE-PAGE2.json';
import page3 from '../jsonData/CONTENTLISTINGPAGE-PAGE3.json';

const tempArray = [page1, page2, page3];

export const getMovieList = (index) => async dispatch => {
  if (index === 1) {
    dispatch({ type: GET_MOVIE_LIST });
  }
  try {
    dispatch({ type: GET_MOVIE_LIST_SUCCESS, payload: tempArray[index-1] })
  } catch (error) {
    dispatch({ type: GET_MOVIE_LIST_ERROR, payload: error });
  }
};
