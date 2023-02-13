const myObj = {
  name: "Evans",
  age: 30,
  city: "New York",
};

console.log(myObj.name);

document.getElementById("myName").innerHTML = myObj.name + myObj.age;
document.getElementById("age").innerHTML = myObj.age;
