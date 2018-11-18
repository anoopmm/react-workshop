// import axios from '../common/helpers/APIHelpers';
import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_ERROR,
} from '../constants/actions';

import page1 from '../jsonData/CONTENTLISTINGPAGE-PAGE1.json';
import page2 from '../jsonData/CONTENTLISTINGPAGE-PAGE2.json';
import page3 from '../jsonData/CONTENTLISTINGPAGE-PAGE3.json';


export const getMovieList = (index) => async dispatch => {
  dispatch({ type: GET_MOVIE_LIST });
  try {
    // const response = await axios.get(`${API_VERSION}`);
    if(index===1)
    dispatch({ type: GET_MOVIE_LIST_SUCCESS, payload: page1 });
    else if(index===2)
    dispatch({ type: GET_MOVIE_LIST_SUCCESS, payload: page2 });
    else if(index===3)
    dispatch({ type: GET_MOVIE_LIST_SUCCESS, payload: page3 });
  } catch (error) {
    dispatch({ type: GET_MOVIE_LIST_ERROR, payload: error });
  }
};

