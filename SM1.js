var y = 'INC';
var x = 'DROP';
function processtGrade(grade){
  if (grade < 75){
    if(grade % 2){  //odd
    grade -3;
    }
    else {
     grade -2;   
    }
  }else{

 if(grade % 2){  //odd
   grade + 5;
    }
    else {
      grade + 3;   
    }

  }

}
function processGrade (grade){
    
    if (grade < 70 ){
        console.log("There is no grade like that.");
    }
    if (grade > 100){
        console.log("Grade is overkill");
    }
    else if (grade == y ){
        console.log("Your grade is incomplete.");
    }
    else if (grade == x ) {
        console.log("You have drop the subject.");
    }
}


module.exports = {
    processTheGrade:processGrade,
    process:processtGrade
}