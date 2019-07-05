import * as user from '../action-types/userData'

const initialState = {
  isLoading: false,
  signUpResponse: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case user.SIGN_UP_INIT:
      return { ...state, isLoading: true };

    case user.SIGN_UP_SUCCESS:
      return { ...state, signUpResponse: action.payload, isLoading: false };

    case user.SIGN_UP_FAILURE:
      return { ...state, signUpResponse: action.payload, isLoading: false };

    default:
      return state;
  }
}
