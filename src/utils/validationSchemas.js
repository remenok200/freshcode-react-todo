import * as yup from "yup";

export const TODO_TASK_CHEMA = yup.object({
  text: yup.string().trim().required("Task entry field must not be empty"),
});
