const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (favoriteMeal) => {
          rl.question('Which sport is your absolute favourite? ' , (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
              console.log(`${name} enjoys ${activity} while listening to ${music}. For ${mealeal}, ${name} likes to have ${favoriteMeal}. ${name} loves to play ${sport}, and is very good at ${power}!`);
              rl.close();
            })
          })
        })
      })
    })
  })
});