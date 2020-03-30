const Promise = require("bluebird");
const moment = require("moment");
const chalk = require('chalk');
const fs = require("fs")

const dog_array = [
  "Corgi", "Husky", "Pug", "Pull", "Shiba"
]

generateRandomNumber = () => {
  return Math.floor(Math.random() * 10);
}

const async_print = (dog, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(moment().format('H:mm:ss'), dog);
      resolve(dog)
    }, time);
  })
}

console.log("Start: ", moment().format('H:mm:ss'));

Promise.mapSeries(dog_array, dog => {
  const time = generateRandomNumber() * 1000
  // console.log("time", time)
  return async_print(dog, 2000)
  // .then(value => console.log(chalk.yellow(moment().format('H:mm:ss'), value)))
})
  .then(res => {
    console.log(chalk.yellow(res))
    console.log("End series map: ", moment().format('H:mm:ss'));
  })

Promise.map(dog_array, dog => {
  const time = generateRandomNumber() * 1000
  // console.log("time", time)
  return async_print(dog, 2000)
  // .then(value => console.log(chalk.yellow(moment().format('H:mm:ss'), value)))
})
  .then(res => {
    console.log(chalk.green(res))
    console.log("End map: ", moment().format('H:mm:ss'));
  })