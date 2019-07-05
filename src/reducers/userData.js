import * as user from '../action-types/userData'

const initialState = {
  isLoading: false,
  signUpResponse: {},
  isLogin: false,
  userData: '',
  signInResponse: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case user.SIGN_UP_INIT:
      return { ...state, isLoading: true };

    case user.SIGN_UP_SUCCESS:
      return { ...state, signUpResponse: action.payload, isLoading: false };

    case user.SIGN_UP_FAILURE:
      return { ...state, signUpResponse: action.payload, isLoading: false };

    case user.SIGN_IN_INIT:
      return { ...state, isLoading: true };

    case user.SIGN_IN_SUCCESS:
      return { ...state, signInResponse: action.payload, isLoading: false, isLogin: true };

    case user.SIGN_IN_FAILURE:
      return { ...state, signInResponse: action.payload, isLoading: false, isLogin: false };

    case user.GET_USERDATA_INIT:
      return { ...state, };

    case user.GET_USERDATA_SUCCESS:
      return { ...state, userData: action.payload };

    case user.GET_USERDATA_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
