import React, { useState } from 'react'
import PropTypes from 'prop-types'

const styles = {
  form: {
	padding: '1rem 0rem',
	minWidth: '100%'
  },
  input: {
	width: 'calc(100%-2rem)',
	padding: '1rem',
  },
  button: {
	width: 'calc(100%-2rem)',
	padding: '1rem',
  }
}

function AddTodo({onCreate}){
  const [value, setValue] = useState('')

  function submitHandler(event){
	event.preventDefault()
	if (value.trim()){
	  onCreate(value)
	  setValue('')
	}
  }

  return (
	<form style={styles.form} onSubmit={submitHandler}>
	  <input style={styles.input} value={value} onChange={event => setValue(event.target.value)}/>
	  <button style={styles.button} type='submit'>Add Todo</button>
	</form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
}


export default AddTodo
