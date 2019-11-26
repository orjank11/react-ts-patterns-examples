import request from "superagent";
import { Dispatch } from "redux";
import { CountryList, CountryDetails } from "../types";

enum Types {
  INITIAL = 'NormalizedDataReducer/INITIAL',
  FETCH_LIST_REQUESTED = 'NormalizedDataReducer/FETCH_LIST_REQUESTED',
  FETCH_LIST_SUCCESS = 'NormalizedDataReducer/FETCH_LIST_SUCCESS',
  FETCH_LIST_FAILED = 'NormalizedDataReducer/FETCH_LIST_FAILED',
  FETCH_DETAILS_REQUESTED = 'NormalizedDataReducer/FETCH_DETAILS_REQUESTED',
  FETCH_DETAILS_SUCCESS = 'NormalizedDataReducer/FETCH_DETAILS_SUCCESS',
  FETCH_DETAILS_FAILED = 'NormalizedDataReducer/FETCH_DETAILS_FAILED',
  UPDATE = 'NormalizedDataReducer/UPDATE',
  REMOVE = 'NormalizedDataReducer/REMOVE',
  ADD = 'NormalizedDataReducer/ADD'
}

export interface INormalizedDataReducer {
  type: Types;
  list: CountryList[];
  details: {
    [key: string]: CountryDetails;
  }
  isLoading: boolean;
}

const initialState = {
  type: Types.INITIAL,
  list: [],
  details: {},
  isLoading: false,
};

const NormalizedDataReducer = (state: INormalizedDataReducer = initialState, action: any) => {
  switch (action.type) {
    case Types.FETCH_LIST_REQUESTED:
      return {
        ...state,
        type: action.type,
        isLoading: true, 
      }
    case Types.FETCH_LIST_SUCCESS:
      return {
        ...state,
        type: action.type,
        list: action.payload,
        isLoading: false, 
      };
    case Types.FETCH_LIST_FAILED:
    case Types.FETCH_DETAILS_REQUESTED:
    case Types.FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          [action.key]: action.payload
        }
      }
    case Types.FETCH_DETAILS_FAILED:
    case Types.UPDATE:
    case Types.REMOVE:
    case Types.ADD:
    default:
      return state;
  }
};

export const fetchDataList = () => (dispatch: Dispatch) => {
  dispatch({ type: Types.FETCH_LIST_REQUESTED });
  request
    .get('/api/all?fields=name;alpha2Code;alpha3Code')
    .then((result) => {
      dispatch({ type: Types.FETCH_LIST_SUCCESS, payload: result.body });
    })
    .catch((error) => {
      dispatch({ type: Types.FETCH_LIST_FAILED, payload: error });
    })
}

export const fetchDataDetails = (key: string) => (dispatch: Dispatch) => {
  dispatch({ type: Types.FETCH_DETAILS_REQUESTED });
  request
    .get(`/api/alpha/${key}`)
    .then((result) => {
      dispatch({ type: Types.FETCH_DETAILS_SUCCESS, payload: result.body, key });
    })
    .catch((error) => {
      dispatch({ type: Types.FETCH_DETAILS_FAILED, payload: error });
    })
}

export const add = () => () => {}
export const remove = () => () => {}
export const update = () => () => {}

export default NormalizedDataReducer;