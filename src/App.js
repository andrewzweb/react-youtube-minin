import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'
 
//const AddTodo = React.lazy(()=> import('./Todo/AddTodo'))

const AddTodo = React.lazy(()=> new Promise(resolve => {
  setTimeout(() => {
	resolve(import('./Todo/AddTodo'))
  }, 3000)
}))

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
	fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
	  .then(response => response.json())
	
	  .then(todos => {
		setTimeout(() => {
		  setTodos(todos)
		  setLoading(false)
		  },2000)
	  })
  }, [])

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
		<h1>React Todo's</h1>	
		<React.Suspense fallback={<Loader/>}><AddTodo onCreate={addTodo}/></React.Suspense>
		
		{ loading && <Loader/>}
		{ todos.length ? (
		  <TodoList todos={todos} onToggle={toggleTodo}/>
		) : (
		  loading ? null : <p>Not have yet TODO</p>
		)}
			
	  </div>
	</Context.Provider>
  )
}

export default App

