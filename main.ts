// Define a class
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

// Create an instance of the class
let greeter = new Greeter("world");

// Output the result
console.log(greeter.greet());
