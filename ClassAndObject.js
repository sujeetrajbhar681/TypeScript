var Student1 = /** @class */ (function () {
    function Student1(name, studentid, grade, addr) {
        this.name = name;
        this.studentid = studentid;
        this.grade = grade;
        this.addr = addr;
    }
    Student1.prototype.display = function () {
        console.log("Name:" + this.name + " Student ID:" + this.studentid + " Grade:" + this.grade + " Address:" + this.addr);
    };
    return Student1;
}());
var s = new Student1("John\n", 12345, "A\n", "Borivali\n");
s.display();
