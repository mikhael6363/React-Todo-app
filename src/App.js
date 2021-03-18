import React from 'react';
import styles from './App.module.scss';
import TodoApp from 'pages/TodoApp/TodoApp';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <TodoApp />
    </div>
  );
};

export default App;
