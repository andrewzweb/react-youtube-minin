import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  state = {
	isOpen: false
  }

  render(){
	return(
	  <React.Fragment>
		<button onClick={() => this.setState({isOpen:true})}>Open Modal</button>
		
		{this.state.isOpen && <div className='modal'>
		  <div className='modal-body'>
			<h1>Modal</h1>
			<p>Test Nisi porta lorem mollis aliquam ut porttitor leo a. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent.</p>
			<button onClick={() => this.setState({isOpen:false})}>Close</button>
		  </div>		  
		</div>}
	  </React.Fragment>
	)
  }
}
