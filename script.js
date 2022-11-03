
class Person{
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fName(){
    return this.firstName;
  }
  get lName(){
    return this.lastName;
  }
  get vAge(){
    return this.age;
  }
}

//Select inputs
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const submit = document.getElementById('submit');
const input = document.getElementById('input');

// Add an event listener
submit.addEventListener('click', (event)=>{
  event.preventDefault();
  
  const value1 = new Person(firstName, lastName, age);
  input.innerHTML = `Hello, ${value1.fName.value} ${value1.lName.value}!
  You are ${value1.vAge.value} years old.`;

   // Clear the form
    firstName.value = '';
    lastName.value = '';
    age.value = '';
 
});