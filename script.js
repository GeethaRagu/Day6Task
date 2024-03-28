//Task 1

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj = new Movie("Leo", "7 Screen Studio", "7.5");
console.log(obj.title,obj.studio,obj.rating);

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie1 {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
const obj1 = new Movie1("Leo", "7 Screen Studio");
console.log(obj1.title,obj1.studio,obj1.rating);

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie2 {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(movies) {
    var x = movies.filter((movie) => movie.rating === "PG");
    console.log('List of movies with rating as "PG":');
    x.map((e) => {
      console.log(
        `Title:- ${e.title}, Studio:- ${e.studio}, Rating:- ${e.rating}`
      );
    });
  }
}
const movies = [
  new Movie2("Leo", "7 Screen Studio", "PG7.5"),
  new Movie2("Vikram", "AAA", "PG"),
  new Movie2("Jailer", "BBB", "PG"),
  new Movie2("Ayalaan", "CCC", "PG8"),
  new Movie2("Don", "DDD", "PG"),
];
Movie2.getPG(movies);

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const obj2 = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(
  `Title ${obj2.title}, Studio ${obj2.studio}, Rating ${obj2.rating}`
);

//Task2
//Circle

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get radius() {
    return this._radius;
  }
  set radius(r) {
    this._radius = r;
  }
  set color(c) {
    this._color = c;
  }
  get color() {
    return this._color;
  }

  get tostring() {
    return `"Circle[radius=${this.radius},color=${this.color}]"`;
  }
  get area() {
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  }
  get circumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}
let objcircle = new Circle("1.0", "red");
console.log(`Radius:- ${objcircle.radius}
Color:- ${objcircle.color}`);
console.log(`Radius:- ${objcircle.radius}`);
console.log(`Color:- ${objcircle.color}`);
console.log(objcircle.tostring);
console.log(`Area of circle:- ${objcircle.area}`);
console.log(`Circumference of circle:- ${objcircle.circumference}`);

//Task3

//Write a “person” class to hold all the details.
// person name,age,gender,martialstatus,contactnumber,email

class Person {
  constructor(name, age, gender, martialstatus, contactnumber, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.martialstatus = martialstatus;
    this.contactnumber = contactnumber;
    this.email = email;
  }
}
const objperson = new Person(
  "Geetha",
  "35",
  "Female",
  "Married",
  9894891753,
  "geethumsp@gmail.com"
);
console.log(`Name :- ${objperson.name} 
Age :- ${objperson.age}
Gender :- ${objperson.gender}
Martialstatus :- ${objperson.martialstatus}
Contactnumber :- ${objperson.contactnumber}
Email :- ${objperson.email}`);

// Task 4
//write a class to calculate the Uber price.
class Uberprice {
  constructor(kilometer, price) {
    this._kilometer = kilometer;
    this._price = price;
  }
  static price(kilometer, price) {
    console.log(
      `Uber price of Rs ${price} for ${kilometer}km is Rs${kilometer * price}`
    );
  }
}
Uberprice.price(150, 50);

