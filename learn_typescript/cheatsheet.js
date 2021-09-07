// ---------- TypeScript ----------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
// TypeScript brings a type system and future
// capabilities of JS today
// To compile TypeScript to JavaScript you
// must install a compiler
// Install Node at https://nodejs.org/en/
// Check that npm is installed OSX :
// sudo npm install npm -g
// Check that npm is installed Windows :
// npm install npm -g (As Admin)
// Type in your terminal : npm install -g typescript
// I'll use Ecmascript 5 in this tutorial
// Compile to JS with tsc tstut.ts --target ES5
// On Linux / OSX machines autocompile by typing
// tsc *.ts --watch --target ES5 in the terminal
// ---------- VARIABLES ----------
// Variables must start with a letter, _, or $
// and then can contain numbers
// Declaring variables as statically typed is optional
// If you only provide a value the type is inferred
var myName = "Derek";
var myAge = 41;
// booleans can only be true or false
var canVote = true;
// A variable marked as any is a dynamic type
var anything = "dog";
anything = 2;
// You can print in the defined element
// A variable that didn't get a value assigned
// gets undefined
// null is a user assigned value saying that
// no value is assigned
// typeof returns the data type
console.log("myName is a " + typeof (myName));
console.log("canVote is a " + typeof (canVote));
console.log("anything is a " + typeof (anything));
// We can convert strings to numbers
var strToNum = parseInt("5");
console.log("strToNum is a " + typeof (strToNum));
// toString() converts anything into a string
var numToStr = 5;
console.log("numToStr is a " + typeof (numToStr.toString()));
// You define constants with const
var PI = 3.14159;
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
// It is best to always separate with +
console.log(superman.realName + " is " + superman.superName);
// More on interfaces below
// ---------- ARRAYS ----------
// Creates an array of strings that only excepts
// string values
var employees = ["Bob", "Sally", "Sam"];
// This would cause an error
// employees.push(5);
// Print all values in array
console.log(employees.toString());
// You can create arrays of interfaces
var superheroes = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
console.log(superheroes[0].realName + " is " + superheroes[0].superName);
// ---------- MATH ----------
console.log("5 + 4 = " + (5 + 4));
console.log("5 - 4 = " + (5 - 4));
console.log("5 * 4 = " + 5 * 4);
console.log("5 / 4 = " + 5 / 4);
console.log("5 % 4 = " + 5 % 4);
// If you try to add anything to a string both
// become strings
console.log("5 + String 2 = ", (5 + '2'));
var randNum = 1;
// If you increment after the current value is used
// and then it is incremented after
// The same is true with placing the -- after the
// variable
console.log("randNum++ = " + randNum++);
console.log("++randNum = " + ++randNum);
console.log("randNum-- = " + randNum--);
console.log("--randNum = " + --randNum);
// ---------- CONDITIONALS ----------
// If, Switch and the Ternary operator work
// the same in TypeScript as in JS
// Variables defined with let in blocks don't
// change the value of variables outside the block
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
console.log("sampLet : " + sampLet);
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
console.log("sampVar : " + sampVar);
// ---------- LOOPING ----------
// Looping works the same in TypeScript as in JS
// but for..of is added to get values in either
// an array or string
var randArray = [5, 6, 7, 8];
// for..in provides the indexes
for (var val in randArray) {
    console.log(val);
}
// Convert a number array into a string array
var strArray = randArray.map(String);
// for..of provides the values
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    console.log(val);
}
// ---------- FUNCTIONS ----------
// You can assign the variable types for the attributes
// You assign the return type after the attributes
// or if nothing is returned use void
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
console.log("5 + 2 = " + theSum1);
// Assign a default value in the function declaration
// If an attribute isn't required follow the variable
// with a ?
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    // Check if a value was assigned with typeof
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
console.log("5 - 2 = " + getDiff(5));
console.log("5 - 2 - 3 = " + getDiff(5, 2, 3));
// You can receive an unknown number of values
// with a rest parameter ...nums
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    // We can use reduce with the array to add all
    // the values together one by one
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    console.log("Sum : " + sum);
};
sumAll(1, 2, 3, 4, 5);
// Arrow functions don't include function in
// the definition
var addOne = function (x) { return x + 1; };
console.log("1 + 1 = " + addOne(1));
// ---------- CLASSES ----------
// Classes describe real world objects by defining
// their attributes (fields) and capabilities
// (methods)
var Animal = /** @class */ (function () {
    // If you define an attribute with private
    // the value is automatically assigned
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    // You can define methods as private but then
    // it can't be seen by subclasses, or accessed
    // by any code other then that within the class
    Animal.prototype.ownerInfo = function () {
        console.log(this.name + " is owned by " + this.owner);
    };
    // Static methods are accessed using the class
    // name
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: false,
        configurable: true
    });
    // static fields have values that are shared
    // by every object
    Animal.numOfAnimals = 0;
    return Animal;
}());
// Create an Animal object
var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
console.log("Spot's weight is " + spot.weight);
// You can only access static methods by proceeding
// it with the class name
console.log("# of Animals : " + Animal.howManyAnimals());
// You can inherit all methods and fields from
// another class with extends
// Additional methods and fields can be added
// or overwritten
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog("Grover", "Jimmy");
// A call to howManyAnimals() is now 2
console.log("# of Animals : " + Animal.howManyAnimals());
// Use instanceof to check for inheritance
console.log("Is a Dog an Animal : " + (grover instanceof Animal));
// Check if a field exists for an object
console.log("Does grover have a name : " + ('name' in grover));
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        console.log("The car drives with " + this.wheels + " wheels");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        console.log("The bicycle drives with " + this.wheels + " wheels");
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
// ---------- GENERIC FUNCTIONS ----------
// We use generic functions when we want
// to be able to work with multiple data
// types in similar ways
// To create a generic function we place
// 1 or more data type markers in angled
// brackets after the function name. We
// then use those data type markers
// instead of actual data types.
function GetType(val) {
    return typeof (val);
}
var aStr = "A String";
var aNum = 10;
console.log(GetType(aStr));
console.log(GetType(aNum));
// You define a generic function that
// excepts any class that implements
// an interface
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
// You can also define generic classes that
// can work with multiple data types
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
// Define how we want add to work with numbers
aNumber.add = function (x, y) { return x + y; };
console.log("5 + 4 = " + aNumber.add(5, 4));
var aStrNum = new GenericNumber();
// Define how we want add to work with strings
aStrNum.add = function (x, y) { return String(Number(x) + Number(y)); };
console.log("5 + 6 = " + aStrNum.add("5", "6"));
// ---------- DESTRUCTORING ----------
// You can assign multiple values on one line
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
console.log(x + y + z);
// Do the same with arrays
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
console.log("Switch : " + x + y + z);
// ---------- TEMPLATE STRINGS ----------
// Create multiline strings
var multStr = "I go on for\nmany lines";
console.log(multStr);
// You can use string interpolation
console.log("" + multStr);
// ---------- SPREAD OPERATOR ----------
// We can separate values in an array into
// attributs in a function
function theSum(x, y, z) {
    console.log("Sum : " + (x + y + z));
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
// ---------- ENUMS ----------
// Enums are number based in TS
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
;
var myFeeling = Emotion.Happy;
// Same as
myFeeling = 1;
