/* exercise made along with videos

// variable and data type
var FirstName= 'John';
var age= 30;
console.log(FirstName + ' ' + age);

// typoe coecion
var job, isMarried;
job ='teacher';
isMarried = true;

console.log(FirstName + ' is married? '  + isMarried );

//variable mutation
age = 'thirty'; //the variable is already defined so we don't need to put "var"

alert(FirstName + ' ' + age);

var lastName = prompt('What is his last name?');
console.log(FirstName + ' ' + lastName);

// Basic operators
//typeof operator

var z;
console.log(typeof isMarried + ' ' + typeof z);

//operator precedense

var now = 2020;
var damianAge = prompt('What is Damian age');
var fullAge = 18;

var damianIsFullAge = damianAge >= fullAge;

console.log(damianIsFullAge);

alert('Damian is full age? ' + damianIsFullAge);

//grouping
var x,y;

x=y=(3+3)*2-1;
console.log(x,y);

x *=2; //the same as x=x*2

console.log(x);

x++ // as x+2

console.log(x);

end of video course*/

// excercise for made by me
/** 
var johnMass,johnHeight,markMass,markHeight;
johnMass = 80;
johnHeight = 180;
markMass = 120;
markHeight = 160;

//BMI mass= mass/ height^2

var johnBMI,markBMI;
johnBMI= johnMass / (johnHeight*johnHeight);
markBMI = markMass / (markHeight*markHeight);
johnBMIisBigger = johnBMI > markBMI;

console.log('John BMI is ' + johnBMI);
console.log('Mark BMI is ' + markBMI);
console.log('John BMI is bigger than Mark? ' + johnBMIisBigger);

end of comment */

// If else statement

/** var name = 'john';
var civilStatus = prompt('Please enter some text','married');

if (civilStatus == 'married'){
    console.log(name + ' is married!');
} else {
    console.log(name + " will be married soon");
}

*/

/* the next task


var johnMass,johnHeight,markMass,markHeight;
johnMass = 80;
johnHeight = 180;
markMass = 120;
markHeight = 160;

//BMI mass= mass/ height^2

var johnBMI,markBMI;
johnBMI= 80;
markBMI = 100;

if (johnBMI > markBMI) {
    console.log('John BMI is higher than Mark about ' + (johnBMI - markBMI));
} else {
    console.log('Mark BMI is higher than John about ' + (markBMI - johnBMI));
}

end of task */

//another example of using if statement

/*
var firstName = "John";
var age = prompt('Wpisz wiek: ', '18')

if (age < 18) {
    console.log(firstName + ' jest chłopcem');
} else if (age >= 18 && age <30){
    console.log(firstName + ' jest nastolatkiem');
} else {
    console.log(firstName + ' jest mężczyzną');
}

// true: 23 == "23" but is not equal - false: 23 === "23"

*/ 

//Another exercise
/*
var JohnTeamScore = 300;
var MikeTeamScore = 300;
var MaryTeamScore = 290;

var avgJohnTeamScore= JohnTeamScore/3;
var avgMikeTeamScore= MikeTeamScore/3;
var avgMaryTeamScore= MaryTeamScore/3;

console.log(avgJohnTeamScore + ' ' + avgMikeTeamScore + ' '+ avgMaryTeamScore);

if (avgJohnTeamScore > avgMikeTeamScore && avgJohnTeamScore > avgMaryTeamScore){
    console.log('John Team is the winner with ' + avgJohnTeamScore + ' points');
} else if (avgJohnTeamScore < avgMikeTeamScore && avgMikeTeamScore > avgMaryTeamScore) {
    console.log('Mike Team is the winner with ' + avgMikeTeamScore + ' points');
} else if (avgMaryTeamScore > avgMikeTeamScore && avgJohnTeamScore < avgMaryTeamScore) {
    console.log('Mary wins with ' + avgMaryTeamScore);
} else if ((avgJohnTeamScore = avgMikeTeamScore) && (avgJohnTeamScore = avgMaryTeamScore) && (avgMikeTeamScore = avgMaryTeamScore)){
    console.log('All Teams got the same number of points - ' + avgJohnTeamScore + ' points');
}


end */

// Conditional operator
//variableName = (condition) ? value1:value2;
 
/** 
 var age = prompt('Enter you age to check if you can vote:');
 var voteable = (age < 18) ? 'too young' : 'Old enough';

 alert(age);
 console.log(voteable);

*/

// Introduction to JS functions
/*****
 * 

function calculateAge(birthYear){
    return 2020- birthYear;
}

var ageDamian = calculateAge(1990);
var ageJarek = calculateAge(1992);
var ageRafal = calculateAge(1978);

console.log('Damian age ' + ageDamian);
console.log('Rafal age ' + ageRafal);

function yearsToRetairement (year, FirstName){
    var age = calculateAge(year); //using above fuction -calculateAge
    var retirement = 67 - age;
    if (retirement > 0) {
        console.log(FirstName +' is retired for ' + retirement + ' years');
    } else [
        console.log(FirstName + ' is already retired')
    ]
}

var DamianRetairement= yearsToRetairement(1990, 'Damian');
var HenrykRetairement= yearsToRetairement(1953, 'Henryk');


// function declariosn
//  --> function whatDoYouDo (job, firstName) {}
// function expression
//    --> var whatDoYouDo = function(job,firstName){}

 */

 //switch
 /*
 var today = new Date().getDay();
 switch(today){
    case 1: 
    today = "Today is Monday";
    break;
    case 2: 
    today = "Today is Tuesday";
    break;
    case 3: 
    today = "Today is Wednesday";
    break;  
    case 4: 
    today = "Today is Thursday";
    break;
    case 5: today = "Today is Friday";
    break;
    case 6: today = "Today is Saturday";
    break;
    case 0: today = "Today is Sunday";
    break;
}
 console.log(today);
*/

//another example 
/**************** 
var whatDoYouDo = function(job,firstName){
    switch(job) {
        case 'teacher': 
        return firstName + " teaches kids how to code";
        case 'driver': 
        return firstName + " drives a bus";
        default: return firstName + " is unemployment";
    }
}

console.log(whatDoYouDo('carpenter','John'));

*/

/**
 * Arrays (tablice)
 */

 // inititialize array

 /**
var names = ['john','mark','jane'];

console.log(names);
console.log(names[0]);
console.log(names.length);

//mutation of array
names[2]= 'Harry';
names[5]= 'Damian';
names[names.length] = 'Bob'; // add Bob in the last array position)
console.log(names); //(6) ["john", "mark", "Harry", empty × 2, "Damian"]

// different data types:

var me = ['Mr.', 'Damian','Kluba',1990,30,'grey','coder'];

//push

me.push('single'); //adding new value to the array in the last position, the same like arrayName.length.

//indexOf

console.log(me,me.indexOf('single')); // will show 7
console.log(me,me.indexOf('Romek')); // will show -1 - value is not in the array me.

var checkMearray = me.indexOf('Romek') === -1 ? 
'Value is not in the me array' : 'Value is in the me array';

console.log(checkMearray);

// toString() or join, but for join you can specify the separator

var mydata = me.toString();
console.log(mydata);

var mydata1 = me.join('--');
console.log(mydata1);
 */


// exercise

/**
 
function tipCalculator(bill){
  var percentage;

  if (bill < 50) {
      percentage = 0.2;
  } else if (bill >= 50 && bill <200) {
    percentage = 0.15;
  } else {
      percentage = 0.1;
  }

  return percentage * bill; //good to remember
}


//console.log(tipCalculator(100));

var bill = [124,48,268];
var tips = [tipCalculator(bill[0]),tipCalculator(bill[1]),tipCalculator(bill[2])]
var totalAmount= [bill[0]+tips[0],bill[1]+tips[1],bill[2]+tips[2]]

console.log(totalAmount);

* 
 */

 /******
  * Objects definition
  

var currentYear = new Date().getFullYear();

  var person = {
    firstName: 'john',
    lastName: 'deere',
    birthYear: 1990,
    siblings: ['Tom','Ana'],
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    calcAge: function(){
        // return currentYear - this.birthYear;
        this.age = currentYear - this.birthYear; // a new propoerty will be stored in the object - age
    }

};


// or
    var person2 = new Object();
    person2.firstName = 'Jane';
    person2.lastName = 'Sunset';
    person2.age = 31;

    console.log(person.fullName()); //you need to add () in order to return result of function instead of string

    console.log(person.calcAge());

    
    console.log(person);

*/

//exercise
/*
    var Mark = {
        FullName: 'Mark',
        Height: 200,
        Mass: 99,
        BMI: function(){
            return this.Mass/ this.Height * this.Height;
        }
    };
    var John = {
        FullName: 'John',
        Height: 160,
        Mass: 120,
        BMI: function(){
            return this.Mass/ this.Height * this.Height;
        }
    };

    console.log('Mark BMI is '+ Mark.BMI() + " John BMI is " + John.BMI());
    
    var MarkBMI = Mark.BMI();
    var JohnBMI = John.BMI();
    if (MarkBMI > JohnBMI) {
        console.log('Mark BMI is higher about ' + (MarkBMI - JohnBMI));
    } else if (MarkBMI < JohnBMI){
        console.log('John BMI is higher about ' + (JohnBMI - MarkBMI));
    } else {
        console.log('John and Mark BMIs are the same');
    }

    end of exercise*/


/****************************************************************************
 * Loops - For && whikle
 */

 /**example 1 
 for (var i= 1; i <= 5; i++){  // or i+=2  --> i= i+2
     console.log(i);
 }

 // i = 1, 1 < 5, true - log i, increment i by +1
 // i = 2, 2<5, true - log i, increment i by +1
 // i ..
 // i = 6, 6<5, false, exit the loop

*/

/** example 2 */


/********* 
// For loop

var john= ['Mr.','Kowalski',23,180,'blue'];
john.push('big');

for (var i= 0; i < john.length; i++){
    console.log(john[i]);
}

// The For / In loop

for (var i in john){
    console.log(john[i]);
}

// the For / Of loop

for (var i of john){
    console.log(i);
}

end of For loop */

// While loop
/*
var john= ['Mr.','Kowalski',23,180,'blue'];
john.push('big');

var i = 0;

while (i < john.length){  // while + (condition) --> we can put only a condition between the brackets
    console.log(john[i]);
    i++;
}

// Do / while loop
/* Commands:

Do {
    // code block to execute
}
while (condition);

//example:

var i = 0;
do {
    console.log(john[i]);
    i++;
}
while (i < john.length);

*/

///// Continue && Break statements
// the Break jumps out of a loop;
// the Continue jump over one interation in a loop;

/** 
var john= ['Mr.','Kowalski',23,180,'blue', false,'Driver'];
john.push('big');

for (var i= 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue; //-- we can skip {} for if when there is no else command
    console.log(john[i]);
}

for (var i= 0; i < john.length; i++){
    if (typeof john[i] !== 'string') {break;} //-- with {}
    console.log(john[i]);
}

*/


//////////////////////////exercise
/*
  //
  var billJohn = [124,48,268,180,42];
  var tipJohn = [];
  var totalJohn = [];

  for (var i =0; i < billJohn.length; i++){
      if (billJohn[i] < 50){
          tipJohn[i] = billJohn[i] * 0.2;
          totalJohn[i] = billJohn[i] + tipJohn[i];
      } else if (billJohn[i] >= 50 && billJohn[i] <200){
          tipJohn[i] = billJohn[i] * 0.15;
          totalJohn[i] = billJohn[i] + tipJohn[i];
      } else { 
        tipJohn[i] = billJohn[i] * 0.1;
        totalJohn[i] = billJohn[i] + tipJohn[i];
      }
    
  }

  var billMark = [124,48,268,180,42];
  var tipMark = [];
  var totalMark = [];

  for (var i =0; i < billMark.length; i++){
      if (billMark[i] < 100){
          tipMark[i] = billMark[i] * 0.2;
          totalMark[i] = billMark[i] + tipMark[i];
      } else if (billMark[i] >= 100 && billMark[i] <300){
        tipMark[i] = billMark[i] * 0.2;
        totalMark[i] = billMark[i] + tipMark[i];
      } else { 
        tipMark[i] = billMark[i] * 0.25;
        totalMark[i] = billMark[i] + tipMark[i];
      }
    
  }
  
  var stingtipJohn = tipJohn.join(', ');
  var stingtipMark = tipMark.join(', ');
  console.log('John tips are:  ' + stingtipJohn);
  console.log('Mark tips are:  ' + stingtipMark);

  // function to calclulate the avg tips for both guys
  function calcAverage (tips){
    var sum =0;
    for (var i=0; i < tips.length; i++){
        sum += tips[i];
    }
    return sum/tips.length;

  }

  var avgTipJohn= calcAverage(tipJohn); // variable to run the function and calc the avg tip for one of the guys
  console.log(avgTipJohn + ' is the avg of ' + tipJohn);
  var avgTipMark= calcAverage(tipMark);
  console.log(avgTipMark + ' is the avg of ' + tipMark);

  if (avgTipJohn > avgTipMark){
      console.log('John avg of tips is higher than Mark ');
  } else {
    console.log('Mark avg of tips is higher than John ');
  }

  end of exercise */

//////// another example of simple function

function myFunc(theObject) {
    theObject.make = 'Toyota';
    theObject.model = 'Camry';
  }
  
  var mycar = {make: 'Honda', model: 'Accord', year: 1998};
  var x,
  var y = []
  
  x = mycar.make; // x gets the value "Honda"
  
  myFunc(mycar);
  y = mycar.make; // y gets the value "Toyota"
                  // (the make property was changed by the function)
 console.log(y);