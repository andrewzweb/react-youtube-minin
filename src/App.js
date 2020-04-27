import React from 'react'
import TodoList from './Todo/TodoList'

function App() {
  const [todos, setTodos] = React.useState([
	  {'id': 1, completed: false, title: 'Buy bred'},
	  {'id': 2, completed: true, title: 'Repeir cheir'},
	  {'id': 3, completed: false, title: 'Create Logo'},
	  {'id': 4, completed: false, title: 'Call Tifanni'},
	  {'id': 5, completed: false, title: 'Deploy somehing'},
	])

  function toggleTodo(id){
	setTodos(
	  todos.map(todo => {
		if (todo.id === id) {
		  todo.completed = !todo.completed
		}
		return todo
	  })
	)
  }

  return(
	<div className='wrapper'>
	  <h1>React Todo</h1>		
		<TodoList todos={todos} onToggle={toggleTodo}/>	
	</div>
  )
}

export default App
