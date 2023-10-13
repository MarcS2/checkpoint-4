import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "../services/AxiosService.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";


function _drawTodoList() {
  let content = ''
  AppState.todoList.forEach(todo => content += todo.todoList)
  setHTML('todoList', content)
}


function _drawTodoButton() {
  setHTML('todoButton', Todo.todoToggleClosed)
  setTodoCount()
}
function setTodoCount() {
  setText('todoCount', AppState.totalIncompleteTodos)

}


function _drawOpenTodoButton() {
  setHTML('todoButton', Todo.todoToggleOpen)
  setText('todoCount', AppState.totalIncompleteTodos)
  _drawTodoList()
}


export class TodosController {
  constructor() {
    console.log('TodoController loaded');
    AppState.on('account', this.getTodos)
    AppState.on('account', _drawTodoButton)
    AppState.on('totalIncompleteTodos', setTodoCount)

    setInterval(this.setClock, 1000)

  }

  async getTodos() {
    try {
      console.log('getting Todos');
      await todosService.getTodos()
      setTodoCount()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }


  async createNewTodo(event) {
    try {
      event.preventDefault()
      const form = event.target
      const todoFormData = getFormData(form)
      console.log(todoFormData);
      await todosService.createNewTodo(todoFormData)
      console.log('[TODOSCONTROLLER] createNewTodo() new todo created', todoFormData);
      AppState.emit('totalIncompleteTodos')
      _drawTodoList()
      form.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }


  async deleteTodo(todoId) {
    try {
      const wantsToDelete = await Pop.confirm('Are you sure you would like to delete this Todo?')
      if (!wantsToDelete) {
        return
      }
      await todosService.deleteTodo(todoId)
      _drawOpenTodoButton()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }

  }

  async completeTodo(todoId) {
    try {
      await todosService.completeTodo(todoId)
      _drawOpenTodoButton()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  computeIncompleteTodos() {
    todosService.computeIncompleteTodos()
  }
  toggleTodosOpen() {
    _drawOpenTodoButton()
  }

  toggleTodosClosed() {
    _drawTodoButton()
  }


  setClock() {
    let time = new Date()
    setText('clock', time.toLocaleTimeString())
  }

}
