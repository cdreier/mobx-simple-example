import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import { TodoStore } from '../store'

const TodoEditor: React.FC = () => {

  const todo = useContext(TodoStore)

  return (
    <div>
      <label>Todo</label>
      <input value={todo.text} onChange={e => todo.text = e.target.value} />
      <input type="checkbox" checked={todo.completed} onChange={e => todo.completed = e.target.checked} />
    </div>
  )
}

export default observer(TodoEditor)