// Your code here

class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`  // for each class a method of speak was created 
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak () {    // for the instance of bird speak returns a conditional output. 
        if (this.sex == "male") {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`

        }
    }
}