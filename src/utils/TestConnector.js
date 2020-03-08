export const callTestApi = async randomNumber => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/todos/${randomNumber}`
  ).then(response => response.json());
};
