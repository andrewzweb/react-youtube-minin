import React from 'react'
import TodoList from './Todo/TodoList'

function App() {
  const todos = [
	{'id': 1, completed: false, title: 'Buy bred'},
	{'id': 2, completed: false, title: 'Repeir cheir'},
	{'id': 3, completed: false, title: 'Create Logo'},
	{'id': 4, completed: false, title: 'Call Tifanni'},
	{'id': 5, completed: false, title: 'Deploy somehing'},
  ]

  return(
	<div className='wrapper'>
	  <h1>React Todo</h1>		
		<TodoList todos={todos}/>	
	</div>
  )
}

export default App
