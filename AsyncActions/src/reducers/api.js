import fetch from 'isomorphic-fetch';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from '../actions/async-test-actions'

const initialState = {
    messages: []
}

function editMessage(state, id) {
  let newMessagesState = [...state];
  for (var i = newMessagesState.length - 1; i >= 0; i--) {
    if(newMessagesState[i].id === id) {
      newMessagesState[i].isEditeble = true;
      break;
    }
  }
  return newMessagesState;
}


const api = (state = initialState, action) => {
  switch (action.type) {	 
  case 'EDIT_MESSAGE': return {...state, messages: editMessage(state.messages, action.id)}; 
  case 'GET_MESSAGES': return {...state, messages: action.messages};
  default: return state; 
  }
}

export default api
