import { useSelector, useDispatch } from 'react-redux'
import { addItem, deleteItem } from './redux/reducer'
import { useState } from 'react'
import { RootState } from './redux/store'
import { v4 as uuidv4 } from 'uuid'

interface TodoItem {
  id: string
  todo: string
}

interface TodoItemObject {
  id: string
  todoItem: TodoItem
}

const TodoItemList : React.FC  = () => {
  const [ inputValue, SetInputValue] = useState<string>('')
  const itemList = useSelector((state: RootState) => state)
  const itemListObject: TodoItemObject[] = Object.values(itemList)
  console.log("~~", itemListObject)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <input  
          value={inputValue} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>SetInputValue(e.target.value)}
          placeholder="New Item"
        />
        <button onClick={() => {
          const id: string = uuidv4()
          const todo = inputValue
          const todoItem = {id, todo}
          dispatch(addItem({id, todoItem}))
          SetInputValue('')
          }}
        > Enter </button>
      </div>
      <ul>
        {
          itemListObject.map(item =>
            <li key={item.id} onClick={()=>dispatch(deleteItem(item.id))}>
              {item.todoItem.todo}
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default TodoItemList