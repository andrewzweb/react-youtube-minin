import React, { useEffect, useState } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal'
import Axios from 'axios'
 
//const AddTodo = React.lazy(()=> import('./Todo/AddTodo'))

const AddTodo = React.lazy(()=> new Promise(resolve => {
  setTimeout(() => {
	resolve(import('./Todo/AddTodo'))
  }, 3000)
}))

const App = () =>  {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
	  setTimeout(() => {
		Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res=> setTodos(res.data))	
		setLoading(false)
	},1000);
	}, [])

  const toggleTodo = (id)=>{
	setTodos(
	  todos.map(todo => {
		if (todo.id === id) {
		  todo.completed = !todo.completed
		}
		return todo
	  })
	)
  }

  const removeTodo = (id)=>{
	setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = (title)=>{
	setTodos(todos.concat([{
	  title: title,
	  id: Date.now(),
	  completed: false
	}]))
  }

  return(
	  <>
	<Context.Provider value={{ removeTodo }}>
	  <div className='wrapper'>
		<h1>React Todo's</h1>	
		<React.Suspense fallback={<Loader/>}><AddTodo onCreate={addTodo}/></React.Suspense>
		<Modal/>
		{ loading && <Loader/>}
		{ todos.length ? (
		  <TodoList todos={todos} onToggle={toggleTodo}/>
		) : (
		  loading ? null : <p>Not have yet TODO</p>
		)}
			
	  </div>
	</Context.Provider>
	<div className="sider"></div>
	</>
  )
}

export default App

