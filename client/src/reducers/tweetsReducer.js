import { TWEETS } from "../actions/types";

const initialState = {
  tweets: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TWEETS:
        console.log('action : ', action);
      return {
        ...state,
        tweets: action.payload,
      };
    default:
      return state;
  }
}
