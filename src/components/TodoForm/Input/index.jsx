import React from 'react';
import { Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import styles from './Input.module.scss';

const Input = ({ name, ...rest }) => {
  return (
    <>
      <label>
        <Field type='text' name={name}>
          {({ field, form, meta }) => {
            console.log(meta);
            const classNames = cx(styles.input, {
              [styles.validInput]: meta.touched && !meta.error,
              [styles.errorInput]: meta.touched && meta.error,
            });
            return (
              <input type='text' {...field} className={classNames} {...rest} />
            );
          }}
        </Field>
        <ErrorMessage name={name} component={Error} />
      </label>
    </>
  );
};

export default Input;

const Error = () => {
  return (
    <div className={styles.errorMessage}>
      Todo may only contain from 2 to 50 characters
    </div>
  );
};
