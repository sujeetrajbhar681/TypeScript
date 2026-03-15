class Student1{
    name:string;
    studentid:number;
    grade:string;
    addr:string;

    constructor(name:string, studentid:number, grade:string, addr:string){
        this.name = name;
        this.studentid = studentid;
        this.grade = grade;
        this.addr = addr;
    }

    display():void{
        console.log("Name:"+this.name+ " Student ID:"+ this.studentid+ " Grade:"+ this.grade+ " Address:"+ this.addr);
        
    }
}

const s = new Student1("John\n", 12345, "A\n", "Borivali\n");
s.display();