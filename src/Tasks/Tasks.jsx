import React, { Component } from "react";
import styles from "./Tasks.module.css";
import TeensTasksBlock from './TeensTasksBlock';
import ParentsTasksBlock from './ParentsTasksBlock';
import instructionPhoto from './img/day2.jfif'

export default class Tasks extends Component {
  state = {
    chooseParents: true,
    chooseTeens: false,
  };

  handleParentsBlock = () => {
      this.setState({chooseParents: true, chooseTeens:false})
  };

  handleTeensBlock = () => {
      this.setState({chooseTeens:true, chooseParents:false})
  };

  render() {
    return (
      <div className={styles.tasksSection}>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} name="blockButton" onClick={this.handleParentsBlock}>Для батьків</button>
          <button className={styles.button} name="blockButton" onClick={this.handleTeensBlock}>Для підлітків</button>
        </div>

        <div className={styles.parentsTasksBlock} hidden={!this.state.chooseParents}>
          <ParentsTasksBlock screenshot={instructionPhoto}/>
        </div>

        <div className={styles.teensTasksBlock} hidden={!this.state.chooseTeens}>
          <TeensTasksBlock />
        </div>
      </div>
    );
  }
}