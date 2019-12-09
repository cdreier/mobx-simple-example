import React from 'react'
import {observer} from 'mobx-react-lite'
import TodoModel from '../store/TodoModel'

interface TodoProps {
  todo: TodoModel,
}

const Todo: React.FC<TodoProps> = ({todo}) => {
  return (
    <div>
      <span>{todo.text}</span>
      <input type="checkbox" checked={todo.completed} />
    </div>
  )
}

export default observer(Todo)