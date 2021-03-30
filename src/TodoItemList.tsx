import { useSelector, useDispatch } from 'react-redux'
import { addItem, deleteItem } from './redux/reducer'
import { useState } from 'react'
import { RootState } from './redux/store'

const TodoItemList : React.FC  = () => {
  const [ inputValue, SetInputValue] = useState<string>('')
  const itemList = useSelector((state: RootState) => state)
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
          dispatch(addItem(inputValue))
          SetInputValue('')
          }}
        > Enter </button>
      </div>
      <ul>
        {
          itemList.map(item => 
          <li key={item} onClick={()=>dispatch(deleteItem(item))}>
            {item}
          </li>)
        }
      </ul>
    </div>
  );
}

export default TodoItemList