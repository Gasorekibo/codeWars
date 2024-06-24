function getState(p) {
    return Promise.race([
      Promise.resolve(p).then(
        () => "fulfilled",
        () => "rejected"
      ),
      Promise.resolve().then(() => "pending"),
    ]);
  }

  /* Explaination:We've used promise.race() to return whatever promise get settled first,
  and then we pass the first item of the array to handle fulfilled or rejectiong and then we pass two function argument to
  .then() the first argument passed is for handling successfull promise so it will console.log(fulfilled), the second
callback function handle for anerror so it will console.log(rejected), so the second item of the array will be pending
*/