import { combineReducers } from 'redux'
import {userReducers} from './user.reducer'
import conutReducer from "../containers/counter.reducer";
const rootReducer = combineReducers({
    conutReducer
})

export default rootReducer