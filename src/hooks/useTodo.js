import React, { useState } from 'react';

const useTodo = initialValues => {
  const [tasks, setTasks] = useState(initialValues);

  return {
    tasks,
    setTasks,
    addTasks: (values, formikBag) => {
      const newTask = {
        id: Date.now(),
        body: values.body,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      formikBag.resetForm();
    },
    deleteHandler: id => {
      setTasks(tasks.filter(item => item.id !== id));
    },
    completeHandler: (id, isCompleted) => {
      setTasks(
        tasks.map(item => {
          if (item.id === id) {
            return {
              ...item,
              isCompleted: !isCompleted,
            };
          }
          return item;
        })
      );
    },
  };
};

export default useTodo;
