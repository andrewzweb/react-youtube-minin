import React from 'react'


export default function TodoItem({todo, index}){
  return (
	<li><span>{index + 1}</span>  {todo.title}</li>
  )
}
