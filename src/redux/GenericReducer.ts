import request from "superagent";
import { Dispatch } from "redux";

const FETCH_REQUESTED = 'genericReducer/FETCH_REQUESTED';
const FETCH_SUCCESS = 'genericReducer/FETCH_SUCCESS';
const FETCH_FAILED = 'genericReducer/FETCH_FAILED';
const UPDATE = 'genericReducer/UPDATE';
const REMOVE = 'genericReducer/REMOVE';
const ADD = 'genericReducer/ADD';

const initialState = {};

const GenericReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_REQUESTED:
    case FETCH_SUCCESS:
    case FETCH_FAILED:
    case UPDATE:
    case REMOVE:
    case ADD:
    default:
      return state;
  }
};

export const fetchData = () => (dispatch: Dispatch) => {
  dispatch({ type: FETCH_REQUESTED });
  request
    .get('/api/path')
    .then((result) => {
      dispatch({ type: FETCH_SUCCESS, payload: result.body});
    })
    .catch((error) => {
      dispatch({ type: FETCH_FAILED, payload: error });
    })
}
export const add = () => () => {}
export const remove = () => () => {}
export const update = () => () => {}

export default GenericReducer;