import {decorate, observable} from 'mobx'

class TodoModel {
  text = ''
  completed = false
}

// note: in create-react-app, there is no decorator support
// https://mobx.js.org/best/decorators.html
decorate(TodoModel, {
  text: observable,
  completed: observable,
})
// if you set up your own project, or eject the react-app
// you can add the observable decorator to the field itself
// class TodoModel {
//   @observable text = ''
// }

export default TodoModel