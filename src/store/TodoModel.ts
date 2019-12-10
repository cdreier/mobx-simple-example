import {observable} from 'mobx'

class TodoModel {
  @observable text = ''
  @observable completed = false
}

export default TodoModel