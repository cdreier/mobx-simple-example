import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import { TodoStore } from '../store'
import Todo from './Todo'
import "./TodoList.css"


const TodoList: React.FC = () => {

  // this is not a list... obviously - just for demo
  const todos = useContext(TodoStore)

  return (
    <div className="list">
      <Todo todo={todos} />
    </div>
  )
}

export default observer(TodoList)