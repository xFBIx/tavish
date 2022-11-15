const oneLinerJoke = require('one-liner-joke');
const cowsay = require('cowsay');

var getRandomJoke = oneLinerJoke.getRandomJoke();
//const tavish_is_dumb = getRandomJoke.body;

console.log(
    cowsay.say({
        text:getRandomJoke.body,
        e: '❤️ ❤️',
        T: 'bhag',
    })
    );