import { createAction, createReducer} from '@reduxjs/toolkit'
import { produce } from 'immer'

export const addItem = createAction<string>('AddItem')
export const deleteItem = createAction<string>('DeleteItem')

const initialState: string[] = []


const reducer = createReducer(initialState, {
    [addItem.type]: produce((draft, action) => {draft.push(action.payload)}),
    [deleteItem.type]: produce((draft, action) => {
        const index = draft.findIndex((todo:  string ) => todo === action.payload)
        if (index !== -1) draft.splice(index, 1)
    })
})

export default reducer