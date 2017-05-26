import fetch from 'isomorphic-fetch';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from '../actions/async-test-actions'

const initialState = {
    messages: []
}

const api = (state = initialState, action) => {
  switch (action.type) {	  
  case 'GET_MESSAGES': return {...state, messages: action.messages};
  default: return state; 
  }
}

export default api
