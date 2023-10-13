import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawTodoButton() {
  setHTML('todoButton', Todo.todoToggleClosed)
}


function _drawOpenTodoButton() {
  setHTML('todoButton', Todo.todoToggleOpen)
}

export class TodosController {
  constructor() {
    console.log('TodoController loaded');
    AppState.on('account', _drawTodoButton, this.getTodos)
  }

  async getTodos() {
    try {
      await todosService.getTodos()
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
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  toggleTodosOpen() {
    _drawOpenTodoButton()
  }

  toggleTodosClosed() {
    _drawTodoButton()
  }

}