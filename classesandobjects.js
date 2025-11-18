//  classes in javascript

// class without constructor
class Animal {
    bread="Dog";              
    Name="Pitbull";              // properties
    Age=10;
    sound="Barks";

    talking(){
        console.log("I am a Dog.");
        console.log("My name is: "+this.Name);  // methods
        console.log("My age is: "+this.Age);
        console.log("My sound is: "+this.sound);
    }

    walking(){
        console.log("I am walking in the garden."); // methods
    }

}

let animal = new Animal(); // object creation using class
console.log(animal.bread); 
console.log(animal.Name);      // give object the class ki property
console.log(animal.Age);
console.log(animal.sound);
animal.talking();           // giving object the class ki method
animal.walking();

// suppose i need another object as animal2 with bread as cat,name as perssian, age as 8, and sound as meow similar with method walking and talking in it. so we need to have four new varibles for cat and two new methods which is fine we can do it what if there are 100 objects need to be created it is possible but it makes the code bulky and reduces its readabilty so its not recommended to use classes without constructor

// classes with constructor

class Person {
    Name;
    age;                                                  //property
    department;
    city;

    constructor(Name,age,department,city){
        this.Name=Name;                               
        this.age=age;                                    // constructor
        this.department=department;
        this.city=city;
    }

    talking(){
        console.log("My name is: "+this.Name);
        console.log("My age is: "+this.age);             // methods
        console.log("My department is: "+this.department);
        console.log("My city is: "+this.city);
    }

    walking(){
        console.log("I am walking in the garden.");       // methods       
    }    

}

let person1 = new Person("Melwin",20,"computer engineering","Mumbai");
console.log(person1.Name);
console.log(person1.age);
console.log(person1.department);
console.log(person1.city);
person1.talking();
person1.walking();

let person2 = new Person("Aniket",20,"electronics engineering","Mumbai");
console.log(person2.Name);
console.log(person2.age);
console.log(person2.department);
console.log(person2.city);
person2.talking();
person2.walking();

//  public, private property of the class

// 1.public

class Car {
    model;
    colour;
    price; 
    
    constructor(model,colour,price){
        this.model=model;
        this.colour=colour;
        this.price=price;
    }

    description(){
        console.log("The model of the car is: "+this.model);
        console.log("The colour of the car is: "+this.colour);
        console.log("The price of the car is: "+this.price);
    }

}

let car1 = new Car("Bmw","Black",10000000)
console.log(car1.model)
console.log(car1.colour)
console.log(car1.price)
car1.description()

//  here we are able to access the property of the class within the class(ie in description method) as well otside the class after creation of the object because the property like model,colour and price is pulic type of the property.

// 2. private

class Account {
    acc_name;
    #acc_number;
    acc_branch;
    
    constructor(acc_name,acc_number,acc_branch){
        this.acc_name=acc_name;
        this.#acc_number=acc_number;
        this.acc_branch=acc_branch;
    }

    description(){
        console.log("The Account holder name is: "+this.acc_name);
        console.log("The Account number is: "+this.#acc_number);
        console.log("The branch of the account is: "+this.acc_branch);
    }
     
}

let account1 = new Account("Melwin",12345677,"Sion");
console.log(account1.acc_branch);
account1.description();

// the account number is private property of the class therefore we can access it only within the class but not outside the class.
//  in order to access i have two ways 
// 1.  made description method and tried to access it after the creation of the object.
// 2. by using the getter and setter method

// Object cloning

//  Object cloning is the process of the creation of new object with the key value pair of the old object. object copy is not object cloning.
// Ther are three ways to do object cloning
// 1. using spread operator
let obj1 = {
    model:"Bmw",
    colour:"Black",
    price:123456789
}
console.log("Obj1: ",obj1);
let obj2 = {...obj1};
console.log("Obj2: ",obj2);

obj1.colour="Blue"; // changing the vaalue of colur of obj1 doesnot changes the colur of the obj2 then only cloning is sucessfully done.
console.log("Obj1: ",obj1);
console.log("Obj2: ",obj2);

//2. using assignment 

let obj3 = Object.assign({},obj1);
console.log("Obj1: ",obj1);
console.log("Obj3: ",obj3);
obj1.model="Mercedes"; // changing the vaalue of colur of obj1 doesnot changes the colur of the obj2 then only cloning is sucessfully done.
console.log("Obj1: ",obj1);
console.log("Obj3: ",obj3);

// 3. using iteration
let obj4 = {};
for(key in obj1){
    let newKey = key;
    let newvalue = obj1[key];
    obj4[newKey]=newvalue;
}
console.log("Obj1: ",obj1);
console.log("Obj4: ",obj4);
obj1.price=12345678; // changing the vaalue of colur of obj1 doesnot changes the colur of the obj2 then only cloning is sucessfully done.
console.log("Obj1: ",obj1);
console.log("Obj4: ",obj4);


