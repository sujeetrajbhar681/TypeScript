var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.markAttendance = function (isPresent) {
        if (isPresent) {
            console.log("Student is present");
        }
        else {
            console.log("Student is absent");
        }
    };
    return Student;
}());
var student = new Student();
student.markAttendance(true);
student.markAttendance(false);
