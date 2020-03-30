const Promise = require("bluebird");
const moment = require("moment");
const chalk = require('chalk');
const fs = require("fs")

const dog_array = [
  "Corgi", "Husky", "Pug", "Pull", "Shiba"
]

const async_print = (dog) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(moment().format('H:mm:ss'), dog);
      resolve(dog)
    }, 1000);
  })
}

/**
 * @todo    normal loop
 */
const async_print_array = async (dog_array) => {
  for (const dog of dog_array) {
    const value = await async_print(dog)
    console.log(chalk.green(moment().format('H:mm:ss'), value));
  }
}

async_print_array(dog_array)

/**
 * @todo    using bluebird
 */
Promise.map(dog_array, dog => {
  return async_print(dog)
    .then(value => console.log(chalk.yellow(moment().format('H:mm:ss'), value)))
}, { concurrency: 3 })
// .then(res => console.log(chalk.yellow(res)))

Promise.map(dog_array, async dog => {
  const value = await async_print(dog)
  console.log(chalk.red(moment().format('H:mm:ss'), value))
})

/**
 * @todo
 */
const async_array = dog_array.map(dog => async_print(dog))
Promise.all(async_array)
  .then(res => {
    console.log(res);
  })

