import { connect } from 'react-redux'
import AsyncTest from '../modules/async-test'
import { getMessages, addMessage } from '../actions/async-test-actions'

const mapStateToProps = (state) => {
  return {
    messages: state.api.messages
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: () => dispatch(getMessages()),
    addMessage: (text) => dispatch(addMessage(text))
  }
}

const AsyncTestContainer = connect(mapStateToProps, mapDispatchToProps)(AsyncTest)
export default AsyncTestContainer
