
export const reciveMessages = (messages) => {
  return {
    type: "GET_MESSAGES",
    messages
  }
}

export function getMessages() {
  return function (dispatch) {
    return fetch(`http://localhost/api/message.get`)
      .then(response => response.json())
      .then(json =>
        dispatch(reciveMessages(json.response))     
      )
  }
}

export function addMessage(text) {
  return function (dispatch) {
    return fetch(`http://localhost/api/message.add?text=${text}`)
    .then(() =>
        dispatch(getMessages())   
    )
  }
}
