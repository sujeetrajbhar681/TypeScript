abstract class Person{
    abstract getDetails(): void;
    abstract getRole():void;
}
class Student0 extends Person{
    getDetails(): void {
        console.log("I am a student");
    }
    getRole():void{
        console.log("My Role is learning..");
        
    }
}
class Teacher extends Person{
    getDetails(): void {
        console.log("I am a teacher");
    }
    getRole():void{
        console.log("My Role is teaching..");
    }
}
let student0 = new Student0();
student0.getDetails();
student0.getRole();