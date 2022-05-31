export default function getLocalStorage () {
  return JSON.parse(localStorage.getItem('todos')) || [];
}
