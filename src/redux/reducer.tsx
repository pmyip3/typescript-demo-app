import { createAction, createReducer} from '@reduxjs/toolkit'
import { produce } from 'immer'

interface TodoItem {
    id: string
    todo: string
}

interface TodoItemObject {
    id: string
    todoItem: TodoItem
}
  
export const addItem = createAction<TodoItemObject>('AddItem')
export const deleteItem = createAction<string>('DeleteItem')

const initialState = {}

const reducer = createReducer(initialState, {
    [addItem.type]: produce((draft, action) => {
        draft[action.payload.id] = action.payload
    }),
    [deleteItem.type]: produce((draft, action) => {
        delete draft[action.payload]
    })
})

export default reducer