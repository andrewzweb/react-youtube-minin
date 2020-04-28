import React from 'react' 

const styles = {
  div: {
	display: 'flex', 
	justifyContent: 'center', 
	margin: 'auto'
  }
} 

export default () => <div style={styles.div} className="lds-ripple"><div></div><div></div></div>

