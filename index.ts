// <!DOCTYPE html>

class Greeter {
   constructor(public greeting: string) {
    console.log("constructor");
   }
   greet() {
       return this.greeting;
   }
};
 
var greeter = new Greeter("Hello, world!");
var str = greeter.greet();
console.log(str);
