import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_ERROR,
} from '../constants/actions';

const initialState = {
  data: [],
  title: null,
  isFetching: false,
  totalCount: null,
  error: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST:
      return {
        ...state,
        data: [],
        isFetching: true,
      };

    case GET_MOVIE_LIST_SUCCESS:
      return {
        isFetching: false,
        data: [...state.data, ...action.payload.page['content-items'].content],
        title: action.payload.page.title,
        totalCount: action.payload.page['total-content-items'],
        error: {},
      };

    case GET_MOVIE_LIST_ERROR:
      return {
        isFetching: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
