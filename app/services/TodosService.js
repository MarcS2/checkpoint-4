import { api } from "./AxiosService.js"

class TodosService {
  async getTodos() {
    const res = await api.get('api/todos')
    console.log('[TODOSERVICE] getTodos() todos got', res.data);
  }
  async createNewTodo(todoFormData) {
    const res = await api.post('api/todos', todoFormData)
    console.log('[TODOSERVICE] createNewTodo created todo', res.data);
  }

}

export const todosService = new TodosService()