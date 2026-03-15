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
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Student0 = /** @class */ (function (_super) {
    __extends(Student0, _super);
    function Student0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student0.prototype.getDetails = function () {
        console.log("I am a student");
    };
    Student0.prototype.getRole = function () {
        console.log("My Role is learning..");
    };
    return Student0;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.getDetails = function () {
        console.log("I am a teacher");
    };
    Teacher.prototype.getRole = function () {
        console.log("My Role is teaching..");
    };
    return Teacher;
}(Person));
var student0 = new Student0();
student0.getDetails();
student0.getRole();
