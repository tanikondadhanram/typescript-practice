import getTodosResponse from '../../fixtures/getTodosResponse.json'

import { resolveWithTimeout } from '../../utils/TestUtils'

import TodoService from './index'

class TodoFixtureService implements TodoService {
  getTodosAPI() {
    return resolveWithTimeout(getTodosResponse)
  }

  updateTodoCompletionAPI() {
    return resolveWithTimeout({})
  }

  postTodoAPI(requestObject) {
    return resolveWithTimeout({ message: 'success' })
  }
}

export default TodoFixtureService
