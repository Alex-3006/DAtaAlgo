let Hallo = []

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('write a number please', name => {
    for (let i = 0; i < Hallo.length; i++) {
        Hallo.push(i)
        console.log(i)
        if (i === name) {
            console.log("It´s finishd")
            break;
        }
    }
    readline.close();
  });