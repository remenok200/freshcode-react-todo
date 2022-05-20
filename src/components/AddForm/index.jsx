import React from "react";
import { Field } from "formik";
import { Form } from "formik";
import { ErrorMessage } from "formik";
import { Formik } from "formik";
import { TODO_TASK_CHEMA } from "../../utils/validationSchemas";

const AddForm = (props) => {
  const { todos, setTodos } = props;

  const addTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      isDone: false,
      id: Date.now(),
    };

    setTodos([...todos, newTodo]);
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
          <Field name="text" placeholder="todo text" />
          <button type="submit">Add task</button>
          <ErrorMessage name="text" />
        </Form>
      </Formik>
    </>
  );
};

export default AddForm;
