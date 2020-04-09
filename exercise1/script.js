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

    