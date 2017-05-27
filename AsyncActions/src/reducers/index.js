import { combineReducers } from 'redux'
import api from './api'
import future from './future'

const appReducer = combineReducers({
	api,
	future
})

export default appReducer