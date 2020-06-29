import {
  TodoObject,
  UpdateCompletionStatusRequest,
  PostTodosResponse
} from '../../stores/types'

interface TodoService {
  getTodosAPI: () => Promise<Array<TodoObject>>

  updateTodoCompletionAPI: (
    requestObject: UpdateCompletionStatusRequest
  ) => Promise<{}>

  postTodoAPI: (requestObject: TodoObject) => Promise<PostTodosResponse>
}

export default TodoService
