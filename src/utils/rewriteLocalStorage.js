export default function rewriteLocalStorage(newTodos) {
  localStorage.removeItem("todos");
  newTodos.map((todo) => {
    return localStorage.setItem(
      "todos",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("todos") || "[]"),
        todo,
      ])
    );
  });
}
