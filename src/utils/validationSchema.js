import * as Yup from 'yup';

export const TODO_SCHEMA = Yup.object({
  body: Yup.string()
    .matches(/^[\w]{2,50}$/)
    .required(),
});
