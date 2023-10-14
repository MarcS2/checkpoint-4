import { AppState } from "../AppState.js"

export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }


  static get todoToggleClosed() {
    return `<div class="col-4 text-white justify mt-4">
    <p class=" button-card text-center rounded" type="button" title="Open Todo's" onclick="app.TodosController.toggleTodosOpen()"><i class="mdi mdi-less-than fs-6"></i> Todo's: <span id="todoCount">0</span></p>

  </div>`
  }


  get computeTodoState() {
    if (this.completed == false) {
      return `
      <i class="mdi mdi-checkbox-blank-outline fs-5"></i>`
    } else if (this.completed) {
      return `<i class="mdi mdi-checkbox-outline fs-5"></i>
      `
    }
  }

  get todoList() {
    return `
    <div class="text-white">
                    <p class="d-inline" type="button" onclick="app.TodosController.completeTodo('${this.id}')"><span>${this.computeTodoState}</span>
                      ${this.description}</p>
                    <button class="btn btn-danger fs-6 p-1 ms-2" onclick="app.TodosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete-empty"></i></button>
                  </div>
    `
  }

  static get todoToggleOpen() {

    return `<div class="col-12 text-start text-white">
    <p class="" type="button" title="Close Todo's" onclick="app.TodosController. toggleTodosClosed()"><i class="mdi mdi-chevron-down fs-4"></i>Todo's: <span id="todoCount">0</span></p>

  </div>
  <div class="col-12 text-white rounded">
    <form class="text-start" onsubmit="app.TodosController.createNewTodo(event)">
      <label for="description" class="d-block ms-4">New Todo</label>
      <input type="text" id="description" name="description" class="ms-4" style="width: 70%;" placeholder="Todo here...">
      <button class="btn btn-success" type="submit"><i class="mdi mdi-plus"></i></button>
    </form>
    <div id="todoList" class="text-start ms-4 mt-2">
  
    </div>
  </div>

  `
  }

}

{/* <i class="mdi mdi-chevron-down fs-4"></i> */ }