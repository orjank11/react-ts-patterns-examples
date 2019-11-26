import request from "superagent";
import { Dispatch, Action } from "redux";
import { CountryList } from "../types";

enum Types {
  INITIAL = 'GenericReducer/INITIAL',
  FETCH_REQUESTED = 'GenericReducer/FETCH_REQUESTED',
  FETCH_SUCCESS = 'GenericReducer/FETCH_SUCCESS',
  FETCH_FAILED = 'GenericReducer/FETCH_FAILED',
  UPDATE = 'GenericReducer/UPDATE',
  REMOVE = 'GenericReducer/REMOVE',
  ADD = 'GenericReducer/ADD',
} 

export interface IGenericReducer {
  type: Types;
  data: CountryList[];
  isLoading: boolean;
  isError: boolean;
}

interface FetchRequested extends Action {
  type: Types.FETCH_REQUESTED;
}

interface FetchSuccess extends Action {
  type: Types.FETCH_SUCCESS;
  payload: CountryList[];
}

interface FetchFailed extends Action {
  type: Types.FETCH_FAILED;
}

interface Update extends Action {
  type: Types.UPDATE;
}

interface Remove extends Action {
  type: Types.REMOVE;
}

interface Add extends Action {
  type: Types.ADD;
}

type ActionType = FetchRequested | FetchSuccess | FetchFailed | Update | Remove | Add;

const initialState = {
  type: Types.INITIAL,
  data: [],
  isLoading: false,
  isError: false,
};

const GenericReducer = (state: IGenericReducer = initialState, action: ActionType): IGenericReducer => {
  switch (action.type) {
    case Types.FETCH_REQUESTED:
      return {
        ...state, 
        isLoading: true,
        type: action.type,
      }
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        type: action.type,
      }
    case Types.FETCH_FAILED:
    case Types.UPDATE:
    case Types.REMOVE:
    case Types.ADD:
    default:
      return state;
  }
};

export const fetchData = () => (dispatch: Dispatch) => {
  dispatch({ type: Types.FETCH_REQUESTED });
  request
    .get('/api/all?fields=name;alpha2Code;alpha3Code')
    .then((result) => {
      dispatch({ type: Types.FETCH_SUCCESS, payload: result.body});
    })
    .catch((error) => {
      dispatch({ type: Types.FETCH_FAILED, payload: error });
    })
}
export const add = () => () => {}
export const remove = () => () => {}
export const update = () => () => {}

export default GenericReducer;