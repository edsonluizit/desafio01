
import { Header } from './components/header/Header'
import { TodoList } from './components/todoList/TodoList'

import './global.css'

export function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  )
}