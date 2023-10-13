import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js"

class TodosService {
  async completeTodo(todoId) {
    const todoIndex = AppState.todoList.findIndex(todo => todo.id == todoId)
    if (todoIndex == -1) { return }
    const foundTodo = AppState.todoList[todoIndex]
    const todoData = {
      completed: !foundTodo.completed
    }
    const res = await api.put(`api/todos/${todoId}`, todoData)
    const newTodo = new Todo(res.data)
    AppState.todoList.splice(todoIndex, 1, newTodo)
    this.computeIncompleteTodos()
    AppState.emit('totalIncompleteTodos')
  }
  async deleteTodo(todoId) {
    const res = await api.delete(`api/todos/${todoId}`)
    const todoIndex = AppState.todoList.findIndex(todo => todo.id == todoId)
    if (todoIndex == -1) {
      return
    }
    AppState.todoList.splice(todoIndex, 1)
    this.computeIncompleteTodos()
  }
  async getTodos() {
    const res = await api.get('api/todos')
    AppState.todoList = res.data.map(POJO => new Todo(POJO))
    console.log('AppState todo Pojos', AppState.todoList);
    this.computeIncompleteTodos()
  }
  async createNewTodo(todoFormData) {
    const res = await api.post('api/todos', todoFormData)
    AppState.todoList.push(new Todo(res.data))
    console.log('[TODOSERVICE] createNewTodo created todo', res.data);
    this.computeIncompleteTodos()
  }

  computeIncompleteTodos() {
    let total = 0
    AppState.todoList.forEach(todo => { if (todo.completed == false) { total++ } })
    AppState.totalIncompleteTodos = total
    total = 0
  }

}

export const todosService = new TodosService()