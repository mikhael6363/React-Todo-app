import React from 'react';
import { useTodo } from 'hooks';
import { TodoContext } from 'contexts';
import TodoForm from 'components/TodoForm';
import styles from './TodoApp.module.scss';
import TodoList from 'components/TodoList';

const TodoApp = props => {
  const { ...state } = useTodo([]);
  console.log(state.tasks);

  return (
    <TodoContext.Provider value={{ ...state }}>
      <div className={styles.todoApp}>
        <header className={styles.todoHeader}>
          <h1 className={styles.todoHeading}>Mike's Todo List</h1>
        </header>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
