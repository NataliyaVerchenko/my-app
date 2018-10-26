
import React from 'react';




class Counter extends React.Component {
  
    render() {
      return (
        <div className={styles.counter}>
        
          <p className={styles.paragraph}>{this.state.count}</p>
          <button className={styles.button} onClick={this.increment}>
            +
          </button>
          <button className={styles.button} onClick={this.decrement}>
            -
          </button>
        </div>
      )
    }
  }
  
  export default Counter