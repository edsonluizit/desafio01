import './App.css'
import { CreateTodo } from './components/createTodo/CreateTodo'
import { Header } from './components/header/Header'
import { TodoList } from './components/todoList/TodoList'

export function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  )
}