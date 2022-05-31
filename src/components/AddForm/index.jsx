import React, { useState } from "react";
import { Field } from "formik";
import { Form } from "formik";
import { ErrorMessage } from "formik";
import { Formik } from "formik";
import { TODO_TASK_CHEMA } from "../../utils/validationSchemas";
import ACTION_TYPES from "../ToDo/reducer/actionTypes";
import styles from "./AddForm.module.scss";
import addIcon from "../../icons/add.svg";

const AddForm = (props) => {
  const { 
    reducerData: [state, dispatch],
   } = props;

  const addTodo = (todoText) => {
    dispatch({ type: ACTION_TYPES.ADD, text: todoText });
  };

  const onSubmit = (values, formikBag) => {
    const castValues = TODO_TASK_CHEMA.cast(values); // чтобы записать результат работы .trim() в схеме валидации
    addTodo(castValues.text);
    formikBag.resetForm();
  };

  return (
    <>
      <Formik
        validationSchema={TODO_TASK_CHEMA}
        initialValues={{ text: "" }}
        onSubmit={onSubmit}
      >
        <Form>
            <Field name="text" placeholder="Enter text new todo" />
            <button type="submit" className={styles.section}>
              <img src={addIcon} alt="add button" />
            </button>
              <ErrorMessage name="text" className={styles.error} component="p" />
          </Form>
      </Formik>
    </>
  );
};

export default AddForm;
