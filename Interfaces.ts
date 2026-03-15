interface Attendance{
    markAttendance(isPresent:boolean):void
}
class Student implements Attendance{
    markAttendance(isPresent: boolean): void {
        if(isPresent){
            console.log("Student is present");
        }else{
            console.log("Student is absent");
        }
}
}
let student = new Student();
student.markAttendance(true);
student.markAttendance(false);
