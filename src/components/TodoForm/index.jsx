import React, { useContext } from 'react';
import { TodoContext } from 'contexts';
import { Formik, Form, Field } from 'formik';
import Input from './Input';
import { INITIAL_VALUES } from 'constants.js';
import { TODO_SCHEMA } from 'utils/validationSchema';
import styles from './TodoForm.module.scss';

const TodoForm = props => {
  const { addTasks } = useContext(TodoContext);

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={addTasks}
      validationSchema={TODO_SCHEMA}
    >
      <Form className={styles.todoForm}>
        <Input
          name='body'
          placeholder='Add a todo'
          className={styles.todoInput}
        />
        <button className={styles.todoButton} type='submit'>
          <i className='fas fa-plus-square' />
        </button>
      </Form>
    </Formik>
  );
};

export default TodoForm;
