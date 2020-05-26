import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './userId.module.css'
import TodoItem from './todoItem'


class UserId extends Component {

  render() {
    const { user,id } = this.props 
    let userId = user.map(({ id , title , completed },index)  => { return (<TodoItem key={index} id={id} title={title} completed={completed} />) })
    
    return (
      <div className={styles.mainContainer}>
       <p className={styles.textUser}> UserId : {id + 1 }</p>
        <div className={styles.flexContainer}>
          {userId}
        </div>   
      </div>
    );
  }
}

UserId.propTypes = {
  user : PropTypes.array,
  id : PropTypes.number
}

export default UserId;