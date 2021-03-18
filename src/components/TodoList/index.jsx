import React, { useContext } from 'react';
import { TodoContext } from 'contexts';
import Todo from 'components/Todo';
import styles from './TodoList.module.scss';

const TodoList = props => {
  const { tasks } = useContext(TodoContext);
  return (
    <div className={styles.todoListWrapper}>
      <ul className={styles.todoList}>
        {tasks.map(item => (
          <Todo key={item.id} tasks={tasks} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
