export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
  }


  static get todoToggleClosed() {
    return `<div class="col-12 text-end">
    <p class="p-2" type="button" title="Open Todo's" onclick="app.TodosController.toggleTodosOpen()"><i class="mdi mdi-chevron-down fs-4"></i>Todo's: <span id="todoCount">0</span></p>

  </div>`
  }

  static get todoToggleOpen() {
    return `<div class="col-12 text-start">
    <p class="p-2" type="button" title="Close Todo's" onclick="app.TodosController. toggleTodosClosed()"><i class="mdi mdi-chevron-down fs-4"></i>Todo's: <span id="todoCount">0</span></p>

  </div>
  <div class="col-12">
    <form class="text-start" onsubmit="app.TodosController.createNewTodo(event)">
      <label for="description" class="d-block ms-4">New Todo</label>
      <input type="text" id="description" name="description" class="ms-4">
      <button class="btn btn-success" type="submit"><i class="mdi mdi-plus"></i></button>
    </form>
  </div>`
  }
}

{/* <i class="mdi mdi-chevron-down fs-4"></i> */ }