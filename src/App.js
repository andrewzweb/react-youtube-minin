import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'

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

  function removeTodo(id){
	setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title){
	setTodos(todos.concat([{
	  title: title,
	  id: Date.now(),
	  completed: false
	}]))
  }

  return(
	<Context.Provider value={{ removeTodo }}>
	  <div className='wrapper'>
		<h1>React Todo</h1>		
		<AddTodo onCreate={addTodo}/>
		{ todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>Not have yet TODO</p>}
			
	  </div>
	</Context.Provider>
  )
}

export default App

