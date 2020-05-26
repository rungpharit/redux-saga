import React, { Component } from 'react';

import UserId from './userId'
import styles from './todos.module.css'

class Todos extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      todos : [
        [
          {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": true
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
        ],
        [
          {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        },
          {
            "userId": 2,
            "id": 21,
            "title": "suscipit repellat esse quibusdam voluptatem incidunt",
            "completed": false
          },
          {
            "userId": 2,
            "id": 22,
            "title": "distinctio vitae autem nihil ut molestias quo",
            "completed": true
          },
        ]
      ]
    };
  }

  render() {

    let users =  this.state.todos.map((user,index) => { return (<UserId key={index} id={index} user={user} />) })

    return (
     
      <div className={styles.mainContainer}>      
        <div>      
          {users}
        </div>
        <div className={styles.divButton}>
          <button className={styles.button}>LoadMore</button>
        </div>
      </div>
   
    );
  }
}




export default Todos;