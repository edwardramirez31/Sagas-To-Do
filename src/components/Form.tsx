import { Button, TextField } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addTask } from '../app/slices/taskSlice';

const Form: React.VFC = () => {
  const dispatch = useDispatch();

  const formSchema = Yup.object().shape({
    text: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={{
        text: '',
      }}
      validationSchema={formSchema}
      onSubmit={(data, helpers): void => {
        dispatch(addTask({ ...data, completed: false }));
        helpers.resetForm();
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur }): JSX.Element => (
        <form
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-around',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Add a text"
            style={{ width: '85%' }}
            name="text"
            value={values.text}
            onChange={handleChange}
            error={Boolean(touched.text && errors.text)}
            helperText={touched.text && errors.text}
            onBlur={handleBlur}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
            style={{ width: '10%' }}
          >
            Add
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
