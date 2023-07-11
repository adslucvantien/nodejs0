
//Regular functions
function add(a, b) {
  return a + b;
}

// Anonymous
var greet = function() {
  console.log("Hello!");
};



//Arrow functions
var multiply = (a, b) => 
{
  a * b;
}


function greet(name) {
  console.log("Hello, " + name + "!");
}

function bye(name) {
  console.log("Bye, " + name + "!");
}

function Say(myfunction, name) {
  myfunction(name);
}

Say(greet, "John");
Say(bye, "John");


