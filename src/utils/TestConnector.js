export const callTestApi = async randomNumber => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/todos/${randomNumber}`
  )
    .then(response => response.json())
    .catch(error => {
      console.error(
        "Error while retrieving the todo from the test API!",
        error
      );
      return { id: -1, number: randomNumber };
    });
};
