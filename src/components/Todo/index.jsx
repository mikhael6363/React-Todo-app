import React, { useContext } from 'react';
import { TodoContext } from 'contexts';
import cx from 'classnames';
import styles from './Todo.module.scss';

const Todo = ({ ...todo }) => {
  const { id, body, isCompleted } = todo;
  const { completeHandler, deleteHandler } = useContext(TodoContext);

  const classNames = cx(styles.todoItem, {
    [styles.completed]: isCompleted,
  });

  return (
    <div className={styles.todo}>
      <li className={classNames}>{body}</li>
      <button
        className={styles.completeBtn}
        onClick={() => completeHandler(id, isCompleted)}
      >
        <i className='fas fa-check' />
      </button>
      <button className={styles.trashBtn} onClick={() => deleteHandler(id)}>
        <i className='fas fa-trash' />
      </button>
    </div>
  );
};

export default Todo;
