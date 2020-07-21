/*
CHANGE_INPUT, INSERT, TOGGLE, REMOVE
 */

import {createAction, handleAction} from "redux-actions";

const CHANGE_INPUT = 'change_input/CHANGE_INPUT'
const INSERT = 'insert/INSERT'
const TOGGLE = 'toggle/TOGGLE'
const REMOVE = 'remove/REMOVE'

export const change_input= createAction(CHANGE_INPUT)
export const insert = createAction(INSERT)
export const toggle = createAction(TOGGLE)
export const remove = createAction(REMOVE)

const initialState = ({string:''})

const todosReducer = handleAction({
    [CHANGE_INPUT]: (state,action)=>({string: state.string}),
    [INSERT]: (state,action)=>({string: state.string}),
    [TOGGLE]: (state,action)=>({string: state.string}),
    [REMOVE]: (state,action)=>({string: state.string})
},
    initialState
)
export default todosReducer