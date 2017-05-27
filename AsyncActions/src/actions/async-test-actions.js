export const editMessage = (id) => {
  return {
    type: "EDIT_MESSAGE",
    id
  }
}

export const saveMessage = (id, text) => {
  return function (dispatch) {
    return fetch(`http://ntash/api/api/message.changeText?id=${id}&newText=${text}`)
    .then(() =>
        dispatch(getMessages())   
    )
  }
}

export const reciveMessages = (messages) => {
  return {
    type: "GET_MESSAGES",
    messages
  }
}

export function getMessages() {
  return function (dispatch) {
    return fetch(`http://ntash/api/api/message.get`)
      .then(response => response.json())
      .then(json =>
        dispatch(reciveMessages(json.response))     
      )
  }
}

export function addMessage(text) {
  return function (dispatch) {
    return fetch(`http://ntash/api/api/message.add?text=${text}`)
    .then(() =>
        dispatch(getMessages())   
    )
  }
}

export function deleteMessage(id) {
  return function (dispatch) {
    return fetch(`http://ntash/api/api/message.delete?id=${id}`)
    .then(() =>
        dispatch(getMessages())   
    )
  }
}
