import React, { useEffect, useState } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal'
import Axios from 'axios'
import { connect } from 'react-redux'
import {startLoading, stopLoading} from './state/ducks/loader/actions'

const AddTodo = React.lazy(()=> new Promise(resolve => {
  setTimeout(() => {
	resolve(import('./Todo/AddTodo'))
  }, 3000)
}))

const App = ({isLoad, startLoading, stopLoading}) =>  {
  const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true) // put outside in redux

  useEffect(() => {
		startLoading();
		Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res=> setTodos(res.data))
		stopLoading();
	}, [startLoading, stopLoading])

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
		{ isLoad && <Loader/>}
		{ !isLoad && todos.length ? (
		  <TodoList todos={todos} onToggle={toggleTodo}/>
		) : (
			isLoad ? null : <p>Not have yet TODO</p>
		)}
			
	  </div>
	</Context.Provider>
	<div className="sider"></div>
	</>
  )
}

const mapDispatchToProps = ({startLoading, stopLoading})
const mapStateToProps = ({loader})=>({isLoad:loader.isLoad})

export default connect(mapStateToProps, mapDispatchToProps)(App)

