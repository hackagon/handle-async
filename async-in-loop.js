const Promise = require("bluebird");
const moment = require("moment");

const dog_array = [
  "Corgi", "Husky", "Pug", "Pull", "Shiba"
]

const async_print = (dog) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(moment().format('H:mm:ss'), dog);
      resolve(dog)
    }, 1000);
  })
}

// async_print(dog_array[0])
const async_print_array = async (dog_array) => {
  for (const dog of dog_array) {
    await async_print(dog)
  }
}

// async_print_array(dog_array)

Promise.map(dog_array, dog => {
  async_print(dog)
})