const readline = require('readline');
const utils = require('./SM1.js');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a grade: ',function (answer)  {
  var grade = parseInt(answer);
  var grade = (answer);

  utils.processTheGrade(grade);
  
  rl.close();
});