export default function writeLocalStorage(newTodo) {
  localStorage.setItem(
    "todos",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("todos") || "[]"),
      newTodo,
    ])
  );
}
