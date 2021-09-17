const num1=5;
const num2 =10;

function addValues(){
    console.log(`The sum is: ${num1+num2}`);
}

//As this function is invoked here,
//We can just require this module like this require('./7-mind-grenade'); whithout having to export it

//if we have a function inside of a module that we invoke,that code will run even though we didn't assign it to
//a variable and didn't assing it to a variable
addValues();