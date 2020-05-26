import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './todoItem.module.css'

class TodoItem extends Component {

  render() {

    const {id , title , completed} = this.props

    return (
      <div className={styles.mainContainer} style={{ backgroundColor : completed ? '#77DD77' : '#FF6961'}}>
        <p><span className={styles.textColor}>Id : </span>  {id}</p>
        <p><span  className={styles.textColor}>Todo :  </span>{title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  id : PropTypes.number,
  title : PropTypes.string,
  completed : PropTypes.bool
  
}

export default TodoItem;